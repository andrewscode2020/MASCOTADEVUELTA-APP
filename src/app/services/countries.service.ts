import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';





@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }
  BASE_URL = `${environment.API_URL}/countries`

  getCountries() {

    return this.http.get<Array<Country>>(this.BASE_URL)

  }

}

