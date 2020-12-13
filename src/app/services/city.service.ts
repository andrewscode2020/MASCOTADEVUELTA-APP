import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { City } from '../interfaces/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  BASE_URL = `${environment.API_URL}/cities`

  constructor(private http: HttpClient) { }

  getCities() {
    return this.http.get<Array<City>>(`${this.BASE_URL}`)
  }

  getCitiesByState(state: String) {
    return this.http.get<Array<City>>(`${this.BASE_URL}/${state}`)
  }
}
