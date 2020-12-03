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
    breed: Breed = {
    name: '',
    petType: ''
  };

  constructor(private breedService: BreedService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.activatedRoute.params
      .subscribe((params) => {
      this.getBreeds(params.id)
      })
  }

  
  getBreeds(petType: String) {
    this.breedService.getBreedById(petType)
      .subscribe(
        (breedList) => {
          this.breed = breedList
        },
        (error) => {
          console.error('Error accediendo a la lista de razas ', error)
        }
      )
  }

}
