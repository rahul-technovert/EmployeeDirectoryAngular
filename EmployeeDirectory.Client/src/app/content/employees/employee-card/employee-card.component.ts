import { Component, EventEmitter, Input, Output } from '@angular/core';

import { EmployeeService } from 'src/services/employee.service';
import EmployeeCard from 'src/models/employee-card';

@Component({
  selector: 'employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent {
  @Input() card: EmployeeCard;

  @Output() deleteCardEvent = new EventEmitter<number>();
  @Output() toggleProfileEvent = new EventEmitter();

  constructor(private employeeServices: EmployeeService) {
    this.card = new EmployeeCard();
  }

  emitToggleProfileEvent(id: number) {
    this.toggleProfileEvent.emit(id);
  }

  handleDelete(id: number) {
    this.employeeServices
      .deleteEmployee(id)
      .subscribe(() => this.deleteCardEvent.emit(id));
  }
}
