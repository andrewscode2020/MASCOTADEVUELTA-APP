import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countriesL : Array<Country> = [];
  constructor(private countriesService: CountriesService) { }



  ngOnInit(): void { this.countries();
  }

  countries() { this.countriesService.getCountries().subscribe(
    (countriesList) => {
      this.countriesL = countriesList;

    },
(error) => {
  console.error('No se pudo cargar los paises',error)

}
  )}

}
