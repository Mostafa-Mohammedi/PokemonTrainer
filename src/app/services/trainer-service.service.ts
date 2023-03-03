import { Injectable } from '@angular/core';
import { StorageUtil } from 'src/utils/storage.utils';
import { StorageKeys } from '../enum/storage-keys';
import { Pokemon } from '../models/pokemon.models';
import { Trainer } from '../models/trainer.models';

@Injectable({
  providedIn: 'root'
})

/**
 * A service that manages the current user's Pokemon trainer data.
 */
export class TrainerServiceService {
  private _trainer?: Trainer;
  constructor() {
    this._trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer);
  }

  // Getter and setter

  get trainer(): Trainer | undefined {
    return this._trainer;
  } 
  set trainer(pokemonTrainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, pokemonTrainer!);
    this._trainer = pokemonTrainer;
  }

   /**
   * Determines whether the specified Pokemon is in the trainer page.
   * @param {string} pokemonName - The name of the Pokemon to check.
   * @returns True if the Pokemon is in the trainer favourites; otherwise, false.
   */

  public inFavouritePokemon(pokemonName: any): boolean {
    if (this._trainer) {

       return Boolean(this._trainer?.pokemon.find(pokemon => {
        return pokemon.name == pokemonName
      }
      ));

    }
    return false;
  }
  /**
   * Adds the specified Pokemon to the trainer page.
   * @param {Pokemon} newPokemon - The Pokemon to add.
   */
  public addToFavourites(newPokemon: Pokemon): void {
    if (this._trainer) {
      this._trainer.pokemon.push(newPokemon)
    }
  }

   /**
   * Removes the specified Pokemon from the trainer page.
   * @param {string} pokemonName - The name of the Pokemon to remove.
   * @returns An array containing the remaining Pokemon in the trainer page.
   */

  public removeFromFavourites(pokemonName: string): Pokemon[] {
    if (this._trainer) {
      return  this._trainer.pokemon.filter((pokemon: Pokemon) => pokemon.name != pokemonName);
    }
    return [];
  }
}
