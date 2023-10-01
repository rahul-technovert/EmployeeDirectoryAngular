import { Component, EventEmitter, Input, Output } from '@angular/core';
import Employee from 'src/models/employee';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  @Output() toggleProfileEvent = new EventEmitter();
  @Output() toggleFormEvent = new EventEmitter();

  @Input() id = 0;

  employee: Employee;

  constructor(private employeeService: EmployeeService) {
    this.employee = new Employee();
  }

  emitToggleProfileEvent(id: number) {
    this.toggleProfileEvent.emit(id);
  }

  emitToggleFormEvent(id: number) {
    this.toggleFormEvent.emit(id);
  }
  ngOnInit(): void {
    this.employeeService
      .getEmployee(this.id)
      .subscribe((emp) => (this.employee = emp));
  }
}
