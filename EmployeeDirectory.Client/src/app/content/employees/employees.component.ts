import { Component, EventEmitter, Input, Output } from '@angular/core';

import EmployeeCard from 'src/models/employee-card';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {
  @Output() deleteCardEvent = new EventEmitter<number>();
  @Output() toggleFormEvent = new EventEmitter();

  @Input() cards: EmployeeCard[] = [];

  selectedId = 0;
  isProfileVisible = false;

  deleteCard(id: number) {
    this.deleteCardEvent.emit(id);
  }

  toggleForm(id: number) {
    this.toggleFormEvent.emit(id);
  }

  onToggleProfile(id: number) {
    this.isProfileVisible = !this.isProfileVisible;
    this.selectedId = this.isProfileVisible ? id : 0;
  }
}
