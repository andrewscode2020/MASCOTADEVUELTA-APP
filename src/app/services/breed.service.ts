import { Injectable } from '@angular/core';
import { Breed } from '../interfaces/breed';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BreedService {

  BASE_URL = `${environment.API_URL}/breeds`

  constructor(private http: HttpClient) { }

  getBreedByPetType(petType: String) {
    // console.log("petType",petType)
    // console.log("BASE_URL",`${this.BASE_URL}/${petType}`)
    return this.http.get<Array<Breed>>(`${this.BASE_URL}/${petType}`)
  }
}
