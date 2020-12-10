import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NewUser } from '../interfaces/new-user';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private http: HttpClient) { }

  createNewUser(userData) {
    return this.http.post(`${environment.API_URL}/users`, userData);
  }

}