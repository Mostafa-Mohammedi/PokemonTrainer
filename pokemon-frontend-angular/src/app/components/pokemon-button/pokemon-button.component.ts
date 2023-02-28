import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.models';
import { Trainer } from 'src/app/models/trainer.models';
import { TrainerPageService } from 'src/app/services/trainer-page.service';
import { TrainerServiceService } from 'src/app/services/trainer-service.service';

@Component({
  selector: 'app-pokemon-button',
  templateUrl: './pokemon-button.component.html',
  styleUrls: ['./pokemon-button.component.css']
})
export class PokemonButtonComponent {
  
  public isTakenPokemon: boolean = false;

  @Input() pokemonName: string = "";
  @Input() pokemon?: Pokemon;
  @Input() pokemonimage: String="";

  constructor(
    private readonly trainerService: TrainerServiceService,
    private readonly trainerPageService: TrainerPageService
  ){}

  ngOnInit(): void {
    this.isTakenPokemon = this.trainerService.inFavouritePokemon(this.pokemonName)
    

  }


  get loading(): boolean{
    return this.trainerPageService.loading;
  }


  onTrainerCatch(): void {
    if (this.isTakenPokemon) {
      alert("This pokemon is already in your favorites.");
      return;
    }

    console.log(this.pokemonName);
    console.log(this.pokemon);
    console.log(this.pokemonimage);
  
    this.trainerPageService.addToPokemonTrainer(this.pokemonName).subscribe({
      next: (trainer: Trainer) => {
        this.isTakenPokemon = this.trainerService.inFavouritePokemon(this.pokemonName);
        console.log("response: ", trainer)
      }, 
      error: (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    })
  }
  

}
