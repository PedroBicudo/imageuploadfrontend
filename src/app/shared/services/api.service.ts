import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  post$(endpoint: string, data: any) {
    return this.httpClient.post<any>(`${environment.API_BASE_URL}${endpoint}`, data);
  }

  get$(endpoint: string, config: any) {
    return this.httpClient.get<any>(`${environment.API_BASE_URL}${endpoint}`, config);
  }
}
