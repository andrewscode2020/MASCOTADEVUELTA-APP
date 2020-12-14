import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  BASE_URL = `${environment.API_URL}/users/authentication`

  constructor(private http: HttpClient) { }

  autenticar(credenciales = {}) {
    return this.http.post(this.BASE_URL, credenciales)
  }

  guardarToken(token: any) {
    localStorage.setItem('mdvToken', token)
  }

}