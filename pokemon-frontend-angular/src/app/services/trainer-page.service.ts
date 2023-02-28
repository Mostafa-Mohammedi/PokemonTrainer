import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.models';
import { Trainer } from '../models/Trainer.models';
import { PokemonCatalogueService } from './pokemon-catalogue.service';
import { TrainerServiceService } from './trainer-service.service';

const { apiKey, apiTrainer } = environment


@Injectable({
  providedIn: 'root'
})
export class TrainerPageService {
  private _loading: boolean = false;


  constructor(
    private http: HttpClient,
    private readonly pokemonCatalogueService: PokemonCatalogueService,
    private readonly trainerService: TrainerServiceService
  ) { }

  get loading(): boolean {
    return this._loading;
  }

  public addToPokemonTrainer(pokemonName: string): Observable<Trainer> {

    if (!this.trainerService.trainer) {
      throw new Error("addToPokemonTrainer user doesnt exist: ");
    }
    const trainer: Trainer = this.trainerService.trainer;

    const pokemon: Pokemon |undefined = this.pokemonCatalogueService.pokemonByName(pokemonName);

    if (!pokemon) {
      throw new Error("addToPokemonTrainer pokemon doesnt exist")
    }
    if(this.trainerService.inFavouritePokemon(pokemonName)){
      throw new Error("addToPokemonTrainer pokemon already in favorites.")
    }

    this._loading = true;

    const headers = new HttpHeaders ({
      'content-type' : 'application/json',
      'x-api-key' : apiKey
    })
    return this.http.patch<Trainer>(`${apiTrainer}/${trainer.id}`, {
      pokemon: [...trainer.pokemon, pokemon]
      
    }, {
      headers
    }) .pipe(tap((updateTrainer: Trainer) => {
      this.trainerService.trainer = updateTrainer;

    }),
      finalize(()=> {
        this._loading = false;

      })
    );

  }

  
}
