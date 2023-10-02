import { Component, EventEmitter, Input, Output } from '@angular/core';

import { EmployeeService } from 'src/services/employee.service';
import { MasterDataService } from 'src/services/master-data.service';
import Employee from 'src/models/employee';
import Utils from 'src/common/utils';
import EmployeeCard from 'src/models/employee-card';
import EmployeeMaster from 'src/models/employee-master';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent {
  @Output() toggleFormEvent = new EventEmitter();
  @Output() editCardEvent = new EventEmitter<EmployeeCard>();
  @Output() addCardEvent = new EventEmitter<EmployeeCard>();

  @Input() id = 0;

  employee: Employee;
  employeeMaster: EmployeeMaster;

  constructor(
    private employeeService: EmployeeService,
    private masterServices: MasterDataService,
    private utils: Utils
  ) {
    this.employee = new Employee();
    this.employeeMaster = new EmployeeMaster();
  }

  handleSubmitForm() {
    if (!this.id) this.createEmployee();
    else this.editEmployee();
  }

  ngOnInit(): void {
    if (this.id) {
      this.employeeService
        .getEmployee(this.id)
        .subscribe((emp) => (this.employee = emp));
    }

    this.masterServices
      .getEmployeeMaster()
      .subscribe((data) => (this.employeeMaster = data));
  }

  private editEmployee() {
    this.editCardEvent.emit(this.utils.mapEmployeeToCard(this.employee));
    this.employeeService.save(this.employee).subscribe((_) => {});
    this.toggleFormEvent.emit(0);
  }

  private createEmployee() {
    this.employeeService.save(this.employee).subscribe((data) => {
      this.addCardEvent.emit(this.utils.mapEmployeeToCard(data));
      this.toggleFormEvent.emit(0);
    });
  }
}
