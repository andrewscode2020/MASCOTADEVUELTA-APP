import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breed } from '../../interfaces/breed';
import { BreedService } from '../../services/breed.service';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss']
})
export class BreedComponent implements OnInit {
  breeds: Array<Breed> = [];

  constructor(private breedService: BreedService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params) => {
        this.getBreeds(params.petType)
      })
  }


  getBreeds(petType: String) {
    this.breedService.getBreedByPetType(petType)
      .subscribe(
        (breedsList) => {
          this.breeds = breedsList
        },
        (error) => {
          console.error('Error accediendo a la lista de razas ', error)
        }
      )
  }

}
