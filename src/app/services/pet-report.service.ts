import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetReportService {

  constructor(private http: HttpClient) { }

  createNewReport(petData) {
    const mdvToken = localStorage.getItem('mdvToken');
    const mdvHeaders = new HttpHeaders({
      Authorization: `Bearer ${mdvToken}`
    })
    return this.http.post(`${environment.API_URL}/petreports`, petData, { headers: mdvHeaders });
  }

  getReport(petId) {
    return this.http.get(`${environment.API_URL}/petreports/${petId}`);
  }

  getAllReports() {
    return this.http.get(`${environment.API_URL}/petreports`);
  }
}