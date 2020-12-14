import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private TOKEN_NAME = 'mdvToken';
  BASE_URL = `${environment.API_URL}/users/authentication`

  private user = new BehaviorSubject(null);
  user$ = this.user.asObservable();

  constructor(private http: HttpClient) {
    // En caso de que el usuario ya esté logeado, se envían sus credenciales:
    const token = localStorage.getItem(this.TOKEN_NAME);
    if (token) {
      this.user.next(this.getUserInfo());
    }
   }
   
  autenticar(credenciales = {}) {
    return this.http.post(this.BASE_URL, credenciales);
  }

  signOut() {
    localStorage.removeItem(this.TOKEN_NAME);
    this.user.next(null);
  }

  guardarToken(token: any) {
    localStorage.setItem(this.TOKEN_NAME, token);
    this.user.next(this.getUserInfo());
  }

  getUserInfo() {
    // Consulto el Token
    const token = localStorage.getItem(this.TOKEN_NAME);

    // Lo decodifico para acceder a la sección de información del cliente:
    const base64Url = token.split('.')[1]; // Acá extraemos solo la parte del medio del token
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const userInfo = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(userInfo);
  }

}