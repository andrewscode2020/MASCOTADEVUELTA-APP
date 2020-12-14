import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetReportService } from 'src/app/services/pet-report.service';
import { Breed } from 'src/app/interfaces/breed';
import { BreedService } from "../../services/breed.service"
import { PetType } from 'src/app/interfaces/pet-type';
import { PetTypeService } from '../../services/pet-type.service';
import { City } from 'src/app/interfaces/city';
import { CityService } from '../../services/city.service';
import { Country } from 'src/app/interfaces/country';
import { CountriesService } from "../../services/countries.service";
import { State } from 'src/app/interfaces/state'
import { StateService } from "src/app/services/state.service"
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-reporta-una-mascota',
  templateUrl: './reporta-una-mascota.component.html',
  styleUrls: ['./reporta-una-mascota.component.scss']
})
export class ReportaUnaMascotaComponent {
  newPetReport: FormGroup;
  genders: Array<Object> = [{ text: "Macho", value: "Macho" }, { text: "Hembra", value: "Hembra" }];
  petTypes: Array<PetType> = [];
  breeds: Array<Breed> = [];
  countries: Array<Country> = [];
  states: Array<State> = [];
  cities: Array<City> = [];

  userInfo = {
    name: '',
    email: '',
    phone: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private petReportService: PetReportService, private petTypeService: PetTypeService, private breedService: BreedService, private cityService: CityService, private countriesService: CountriesService, private stateService: StateService, private authenticationService: AuthenticationService
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
      user: { type: '', required: true },
      publicPhone: false,
      timestamp: '',
      closed: true,
      successful: true,
      endNote: ''
    })

    this.authenticationService.user$.subscribe(
      (userInfo) => {
        this.userInfo = userInfo;
      }
    )
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

      petData.append('userName', this.userInfo.name);
      petData.append('userEmail', this.userInfo.email);
      petData.append('userPhone', this.userInfo.phone);

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

  ngOnInit(): void {
    this.getPetTypesList();
    this.getCountries();
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
    this.breedService.getBreedByPetType(this.newPetReport.value.petType)
      .subscribe(
        (breedsList) => {
          this.breeds = breedsList;
        },
        (error) => {
          console.error('No se pudo cargar las razas de perro', error)

        }
      )
  }

  getCountries() {
    this.countriesService.getCountries()
      .subscribe(
        (countriesList) => {
          this.countries = countriesList;
        },
        (error) => {
          console.error('No se pudo cargar las ciudades', error)
        }
      )
  }

  getStates() {
    this.stateService.getStatesByCountry(this.newPetReport.value.country)
      .subscribe(
        (statesList) => {
          this.states = statesList;
        },
        (error) => {
          console.error('No se pudo cargar los estados', error)
        }
      )
  }

  getCities() {
    this.cityService.getCitiesByState(this.newPetReport.value.state)
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