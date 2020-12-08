import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-ingresa',
  templateUrl: './ingresa.component.html',
  styleUrls: ['./ingresa.component.scss']
})
export class IngresaComponent {
  formularioInicioDeSesion: FormGroup;

  constructor(private formBuilder: FormBuilder, private autenticacionServicio: AuthenticationService) {
    this.formularioInicioDeSesion = this.formBuilder.group({
      loginEmail: ['', Validators.required],
      loginPassword: ['', Validators.required]
    });
  }

  iniciarSesion() {
    console.log(this.formularioInicioDeSesion.value);
    this.autenticacionServicio.autenticar( this.formularioInicioDeSesion.value )
      .subscribe((respuesta: any) => {
        this.autenticacionServicio.guardarToken(respuesta.jwt);
        swal('Exito', 'Has logrado iniciar sesión', 'success');
      }, (error) => {
        console.error('Error autenticando el cliente: ', error);
        swal('Error', error.error.err, 'error');
      })
  }
}
