import { Injectable } from '@angular/core';
import { Breed } from '../interfaces/breed';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BreedService {

  BASE_URL = `${environment.API_URL}/breeds`

  constructor(private http: HttpClient) { }

  getBreedById(petType: String) {
    console.log(petType)
    return this.http.get<Breed>(`${this.BASE_URL}/${petType}`)
  }
}
