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
    this.breed = "";
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
    let objFilters = {
      reportType: '',
      petType: '',
      breed: '',
      gender: '',
      city: ''
    };

    console.log("buscando....");
    if (this.reportType === undefined || this.reportType == "") {
      delete objFilters.reportType;
      // console.log("no ha selecionado el reportType");
    } else {
      objFilters.reportType = this.reportType
    }

    if (this.petType === undefined || this.petType == "") {
      delete objFilters.petType;
      console.log("no ha selecionado el petType")
    } else {
      objFilters.petType = this.petType
    }

    if (this.breed === undefined || this.breed == "") {
      delete objFilters.breed;
      console.log("no ha selecionado el breed")
    } else {
      objFilters.breed = this.breed
    }

    if (this.gender === undefined || this.gender == "") {
      delete objFilters.gender;
      console.log("no ha selecionado el gender")
    } else {
      objFilters.gender = this.gender
    }
    debugger
    if (this.city === undefined || this.city == "") {
      delete objFilters.city;
      console.log("no ha selecionado el city")
    } else {
      objFilters.city = this.city
    }

    this.petReportService.getReportsWithFilters(objFilters)
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
