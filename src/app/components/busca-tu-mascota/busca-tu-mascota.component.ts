import { Component } from '@angular/core';
import { PetReportService } from 'src/app/services/pet-report.service';

@Component({
  selector: 'app-busca-tu-mascota',
  templateUrl: './busca-tu-mascota.component.html',
  styleUrls: ['./busca-tu-mascota.component.scss']
})
export class BuscaTuMascotaComponent {
  reports:[];

  constructor(private petReportService: PetReportService) { }

    getOnePet(petId) {
    this.petReportService.getReport(petId)
    .subscribe(
      (res) => {
        console.log('Se encontró reporte con éxito', res)
      },
      (err) => {
        console.error('Error al mostrar reporte: ', err)
      }
    )
  }

  getAllPets() {
    this.petReportService.getAllReports()
    .subscribe(
      (res:[]) => {
        console.log('Búsqueda realizada con éxito', res)
        this.reports = res;
      },
      (err) => {
        console.error('Error al realizar búsqueda: ', err)
      }
    )
  }

}
