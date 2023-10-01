import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpService } from './http.service';
import ApiEndpoints from 'src/common/api';
import EmployeeMaster from 'src/models/employee-master';

@Injectable({
  providedIn: 'root',
})
export class MasterDataService extends HttpService {
  constructor(http: HttpClient) {
    super(http);
  }

  getEmployeeMaster(): Observable<EmployeeMaster> {
    return this.get<EmployeeMaster>(`${ApiEndpoints.EmployeeMaster}`);
  }
}
