import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { State } from "../interfaces/state";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  BASE_URL = `${environment.API_URL}/states`

  constructor(private http: HttpClient) {

  }
  /** metodo donde se consulta la api */
  getStatesByCountry(country: String) {
    console.log("country", country)
    console.log("BASE_URL", `${this.BASE_URL}/${country}`)
    return this.http.get<Array<State>>(`${this.BASE_URL}/${country}`)
  }
}
