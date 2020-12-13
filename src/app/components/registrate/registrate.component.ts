import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUserService } from 'src/app/services/new-user.service';
declare let jQuery;

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.scss']
})
export class RegistrateComponent {
  newUserForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService
  ) {
    this.newUserForm = this.formBuilder.group({
      signupName: ['', Validators.required],
      signupEmail: ['', Validators.required],
      signupPassword: ['', Validators.required],
      signupPhone: ''
    })
  }

  registerUser() {
    console.log(this.newUserForm.value);
    if (this.newUserForm.valid) {
      this.newUserService.createNewUser(this.newUserForm.value)
        .subscribe(
          (res) => {
            console.log('Usuario registrado exitosamente', res)
            jQuery('#modalRegistry').modal('hide');
          },
          (err) => {
            console.error('Error al registrar usuario: ', err)
          }
        )
    }
  }
}
