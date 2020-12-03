import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/services/city.service';
import { City } from "../../interfaces/city"


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  cities: Array<City> = [];

  constructor(private cityService: CityService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params) => {
        this.getCities(params.state)
      })

  }

  getCities(state: String) {
    this.cityService.getCitiesByState(state)
      .subscribe(
        (citiesList) => {
          this.cities = citiesList;
        },
        (error) => {
          console.error('Error accediendo a la lista de ciudades del estado', `${state}`, error)
        }
      )

  }

}
