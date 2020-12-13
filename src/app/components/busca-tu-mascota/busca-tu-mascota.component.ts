import { Component, OnInit } from '@angular/core';
import { PetReportService } from 'src/app/services/pet-report.service';
import { Breed } from 'src/app/interfaces/breed';
import { BreedService } from "../../services/breed.service"
import { PetType } from 'src/app/interfaces/pet-type';
import { PetTypeService } from '../../services/pet-type.service';
import { City } from 'src/app/interfaces/city';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-busca-tu-mascota',
  templateUrl: './busca-tu-mascota.component.html',
  styleUrls: ['./busca-tu-mascota.component.scss']
})
export class BuscaTuMascotaComponent implements OnInit {
  reports: [];
  reportTypes: Array<Object> = [{ text: "Perdidos", value: "Perdido" }, { text: "Encontrado", value: "Encontrados" }];
  genders: Array<Object> = [{ text: "Macho", value: "Macho" }, { text: "Hembra", value: "Hembra" }];
  reportType: "";
  petType: "";
  breed: "";
  gender: "";
  city: "";
  petTypes: Array<PetType> = []
  breeds: Array<Breed> = [];
  cities: Array<City> = [];


  constructor(private petReportService: PetReportService, private petTypeService: PetTypeService, private breedService: BreedService, private cityService: CityService) { }

  getOnePet(petId) {
    debugger
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
        (res: []) => {
          console.log('Búsqueda realizada con éxito', res)
          this.reports = res;
        },
        (err) => {
          console.error('Error al realizar búsqueda: ', err)
        }
      )
  }

  ngOnInit(): void {
    this.getPetTypesList();
    this.getCities();
    this.getAllPets();
  }

  getPetTypesList() {
    this.petTypeService.getPetTypes()
      .subscribe(
        (petTypesList) => {
          this.petTypes = petTypesList;
        },
        (error) => {
          console.error('No se pudo cargar los tipos de mascota', error)

        }
      )
  }

  getBreedsForPetType() {
    this.breedService.getBreedByPetType(this.petType)
      .subscribe(
        (breedsList) => {
          this.breeds = breedsList;
        },
        (error) => {
          console.error('No se pudo cargar las razas de perro', error)

        }
      )
  }

  searchReports() {
    console.log("buscando....");
    if (this.reportType === "") {
      console.log("no ha selecionado el tipo de reporte")
    }
  }

  getCities() {
    this.cityService.getCities()
      .subscribe(
        (citiesList) => {
          this.cities = citiesList;
        },
        (error) => {
          console.error('No se pudo cargar las ciudades', error)
        }
      )
  }

}
