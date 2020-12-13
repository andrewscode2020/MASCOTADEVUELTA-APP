import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetReportService } from 'src/app/services/pet-report.service';

@Component({
  selector: 'app-reporta-una-mascota',
  templateUrl: './reporta-una-mascota.component.html',
  styleUrls: ['./reporta-una-mascota.component.scss']
})
export class ReportaUnaMascotaComponent {
  newPetReport: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private petReportService: PetReportService
  ) { 
    this.newPetReport = this.formBuilder.group({
        reportType: '',
        petType: '',
        name: '',
        breed: '',
        gender: '',
        age: '',
        size: '',
        castrated: '',
        chip: true,
        chipNumber: '',
        petPic: [],
        additionalFeatures: '',
        eventDate: '',
        eventDescription: '',
        country: '',
        state: '',
        city: '',
        neighborhood: '',
        reward: true,
        rewardValue: 0,
        comments: [],
        user: {type: '', required: true },
        publicPhone: false,
        timestamp: '',
        closed: true,
        successful: true,
        endNote: ''
    })
  }

  registerNewPet() {
    if (this.newPetReport.valid) {
      let petData = new FormData();
      //Objeto que recibo del formulario:
      const formObj = this.newPetReport.value;
      //Hago un arreglo de las llaves del objeto:
      const data = Object.keys(formObj);
      //Recorro el arreglo data para llenar el petData:
      for (let key of data) {
        if (key === "petPic") {
          const imageInput: HTMLInputElement = document.querySelector('input#customFile');
          // console.log(imageInput);
          // console.log(imageInput.files[0]);
          petData.append('petPic', imageInput.files[0]);
        } else {
          petData.append(key, formObj[key]);
        }
      }

      // console.log('petData ', petData.get('reportType'));

      // petData.append('reportType', formObj.reportType);
      // petData.append('petType', formObj.petType);
      // petData.append('gender', formObj.gender);
      // petData.append('eventDate', formObj.eventDate);
      // petData.append('city', formObj.city);
      // const imageInput: HTMLElement = document.querySelector('input#customFile');
      // petData.append('petPic', imageInput.files[0]);
      
      this.petReportService.createNewReport(petData)
      .subscribe(
        (res) => {
          console.log('Mascota registrada exitosamente', res)
        },
        (err) => {
          console.error('Error al registrar mascota: ', err)
        }
      )
    }
  }

}