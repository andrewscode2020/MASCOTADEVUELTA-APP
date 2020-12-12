import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PetType } from '../interfaces/pet-type';

@Injectable({
  providedIn: 'root'
})
export class PetTypeService {

  constructor(private http: HttpClient) { }
  BASE_URL = `${environment.API_URL}/pettypes`

  getPetTypes() {

    return this.http.get<Array<PetType>>(this.BASE_URL)

  }

}
