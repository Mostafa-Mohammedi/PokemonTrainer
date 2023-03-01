import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.models';
import { TrainerPageService } from 'src/app/services/trainer-page.service';
import { TrainerServiceService } from 'src/app/services/trainer-service.service';

@Component({
  selector: 'app-pokemon-button',
  templateUrl: './pokemon-button.component.html',
  styleUrls: ['./pokemon-button.component.css']
})
export class PokemonButtonComponent {

  public isTakenPokemon: boolean = false;
  public buttonText = ''

  @Input() pokemonName: string = "";
  @Input() pokemon?: Pokemon;
  @Input() pokemonimage: String = "";

  constructor(
    private readonly trainerService: TrainerServiceService,
    private readonly trainerPageService: TrainerPageService
  ) { }

  ngOnInit(): void {

    this.isTakenPokemon = this.trainerService.inFavouritePokemon(this.pokemonName)
    this.toggleButton(this.isTakenPokemon)

  }

  onTrainerCatch(): void {

    this.trainerPageService.addToPokemonTrainer(this.pokemonName).subscribe({
      next: () => {
        this.isTakenPokemon = this.trainerService.inFavouritePokemon(this.pokemonName);
        this.toggleButton(this.isTakenPokemon)
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    })
  }

  toggleButton(pokemonTaken: boolean): void {

      this.buttonText = pokemonTaken ? 'Release pokemon' : 'Catch pokemon';
  }
}
