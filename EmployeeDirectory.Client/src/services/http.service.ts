import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private _baseURL: string;

  constructor(private http: HttpClient) {
    this._baseURL = environment.baseURL;
  }

  protected get<T>(endpoint: string) {
    return this.http.get<T>(`${this._baseURL}/${endpoint}`);
  }

  protected post<T>(endpoint: string, payload: any) {
    return this.http.post<T>(`${this._baseURL}/${endpoint}`, payload);
  }

  protected put<T>(endpoint: string, payload: any) {
    return this.http.put<T>(`${this._baseURL}/${endpoint}`, payload);
  }

  protected delete<T>(endpoint: string) {
    return this.http.delete<T>(`${this._baseURL}/${endpoint}`);
  }
}
