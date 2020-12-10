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
        eventTime: '',
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
    // console.log(this.newPetReport.value);
    if (this.newPetReport.valid) {
      this.petReportService.createNewReport(this.newPetReport.value)
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