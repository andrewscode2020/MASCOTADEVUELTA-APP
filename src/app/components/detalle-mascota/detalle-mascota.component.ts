import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetReportService } from '../../services/pet-report.service';

@Component({
  selector: 'app-detalle-mascota',
  templateUrl: './detalle-mascota.component.html',
  styleUrls: ['./detalle-mascota.component.scss']
})
export class DetalleMascotaComponent implements OnInit {
  petInfo: any = {
  reportType: '',
  petType: '',
  name: '',
  breed: '',
  gender: '',
  age: '',
  size: '',
  castrated: '',
  chip: '',
  petPic: '',
  additionalFeatures: [],
  eventDate: '',
  eventDescription: '',
  country: '',
  state: '',
  city: '',
  neighborhood: '',
  reward: '',
  rewardValue: 0,
  comments: [],
  publicPhone: '',
  timestamp: '',
  closed: '',
  successful: '',
  endNote: ''
  };

  constructor(
    private petReportService: PetReportService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.getOnePet(params.id);
      }
    )
  }

  getOnePet(petId) {
    this.petReportService.getReport(petId)
      .subscribe(
        (res) => {
          console.log('Se encontró reporte con éxito', res)
          this.petInfo = res[0];
        },
        (err) => {
          console.error('Error al mostrar reporte: ', err)
        }
      )
  }

}
