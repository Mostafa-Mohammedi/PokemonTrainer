import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.models';
import { Trainer } from '../models/trainer.models';
import { PokemonCatalogueService } from './pokemon-catalogue.service';
import { TrainerServiceService } from './trainer-service.service';

const { apiKey, apiTrainer } = environment


@Injectable({
  providedIn: 'root'
})

/**

Boolean indicating if the service is currently loading data
@private
@type {boolean}
*/
export class TrainerPageService {
  private _loading: boolean = false;

  constructor(
    private http: HttpClient,
    private readonly pokemonCatalogueService: PokemonCatalogueService,
    private readonly trainerService: TrainerServiceService
  ) { }

  /**
Getter method for the loading property
@readonly
@type {boolean}
@memberof TrainerPageService
*/
  get loading(): boolean {
    return this._loading;
  }

  /**
Method for adding a pokemon to the trainer's array
@public
@param {string} pokemonName - The name of the pokemon to add
@throws Will throw an error if the trainer or pokemon doesn't exist
@returns {Observable<Trainer>} An observable containing the updated trainer data
*/

  public addToPokemonTrainer(pokemonName: string): Observable<Trainer> {

    if (!this.trainerService.trainer) {
      throw new Error("addToPokemonTrainer user doesnt exist: ");
    }
    const trainer: Trainer = this.trainerService.trainer;

    const pokemon: Pokemon | undefined = this.pokemonCatalogueService.pokemonByName(pokemonName);

    if (!pokemon) {
      throw new Error("addToPokemonTrainer pokemon doesnt exist")
    }
    if (this.trainerService.inFavouritePokemon(pokemonName)) {
      trainer.pokemon = this.trainerService.removeFromFavourites(pokemonName);
    } else {
      this.trainerService.addToFavourites(pokemon)

    }

    this._loading = true;

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': apiKey
    })

    console.log("pokemon elementene i arrayet ", trainer.pokemon)
    return this.http.patch<Trainer>(`${apiTrainer}/${trainer.id}`, {
      pokemon: [...trainer.pokemon]

    }, {
      headers
    }).pipe(tap((updateTrainer: Trainer) => {
      this.trainerService.trainer = updateTrainer;

    }),
      finalize(() => {
        this._loading = false;

      })
    );
  }
}
