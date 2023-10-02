import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpService } from './http.service';
import EmployeeCard from 'src/models/employee-card';
import ApiEndpoints from 'src/common/api';
import Employee from 'src/models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService extends HttpService {
  constructor(http: HttpClient) {
    super(http);
  }

  getAll(): Observable<EmployeeCard[]> {
    return this.get<EmployeeCard[]>(ApiEndpoints.EmployeeCards);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.get<Employee>(`${ApiEndpoints.Employee}/${id}/`);
  }

  save(employee: Employee): Observable<Employee> {
    return this.post<Employee>(`${ApiEndpoints.Employee}`, employee);
  }

  deleteEmployee(id: number): Observable<number> {
    return this.delete<number>(`${ApiEndpoints.Employee}/${id}`);
  }
}
