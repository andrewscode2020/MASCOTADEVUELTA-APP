import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetReportService {

  // private petInfo = new BehaviorSubject({});
  // petInfo$ = this.petInfo.asObservable();

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