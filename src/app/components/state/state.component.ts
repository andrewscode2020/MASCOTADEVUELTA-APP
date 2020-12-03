import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { State } from "../../interfaces/state";
import { StateService } from "../../services/state.service"

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  states: Array<State> = [];

  constructor(private stateService: StateService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params) => {
        this.getStates(params.country)
      })
  }

  getStates(country: String) {
    this.stateService.getStatesByCountry(country)
      .subscribe(
        (statesList) => {
          this.states = statesList
        },
        (error) => {
          console.error('Error accediendo a la lista de estados del pais', error)
        }
      )
  }

}
