import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.models';
import { finalize, map } from 'rxjs';


const { apiPokemon, pokemonImages } = environment;

@Injectable({
  providedIn: 'root'
})

/**
 * service that provides functionality for fetching and working with Pokemon data.
*/

export class PokemonCatalogueService {

  private _pokemon: Pokemon[] = [];
  private _error: string = "";

  private _loading: boolean = false;

  constructor(private readonly http: HttpClient) { }

  get pokemon(): Pokemon[]{
    return this._pokemon;
  }
  get error(): string{
    return this._error;
  }

  get loading(): boolean{
    return this._loading
  }

  private getPokemonImage(id: number): string {
    return `${pokemonImages}/${id}.png`;
  }

  /**
   * Retrieves an array of all Pokemon objects from the API and assigns them to the _pokemon property.
   * Sets the image property of each Pokemon object to the URL of the corresponding image.
*/
  public findAllPokemon(): void {
    this._loading = true;
    this.http.get<Pokemon[]>(apiPokemon)
    .pipe(
      map((response: any) => {
        console.log(response);
        return response.results;
      }),
      finalize(() => {
        this._loading = false;
      })
    )
    .subscribe({
      next: (pokemon: Pokemon[]) => {
        pokemon.forEach((pokemon: Pokemon, index: number) => {
          index++;
          pokemon.image = this.getPokemonImage(index);
        });
        this._pokemon = pokemon;
      },
      error: (error: HttpErrorResponse) => {
        this._error = error.message;
      }
    })
  }

  /**
   * Returns the Pokemon object with the specified name, if it exists in the _pokemon array.
   * @param {string} name - The name of the Pokemon object to retrieve.

*/

  public pokemonByName(name: string): Pokemon | undefined {
    return this._pokemon.find((pokemon: Pokemon) => pokemon.name === name )
  }
}
