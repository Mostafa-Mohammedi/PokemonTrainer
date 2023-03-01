import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.models';
import { Trainer } from '../../models/trainer.models';
import { TrainerServiceService } from 'src/app/services/trainer-service.service';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.pages.html',
  styleUrls: ['./trainer-page.pages.css']
})

export class TrainerPagePages {
  constructor(
    private readonly trainerService: TrainerServiceService
  ) {}

  get trainer(): Trainer | undefined {
    return this.trainerService.trainer;
  }
  get caughtPokemon(): Pokemon[] {
    if(this.trainerService.trainer){
      console.log(this.trainerService.trainer.pokemon)
      return this.trainerService.trainer.pokemon;
    }
    return [];
  }

}
