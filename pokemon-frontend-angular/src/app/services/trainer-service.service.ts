import { Injectable } from '@angular/core';
import { StorageUtil } from 'src/utils/storage.utils';
import { StorageKeys } from '../enum/storage-keys';
import { Pokemon } from '../models/pokemon.models';
import { Trainer } from '../models/trainer.models';

@Injectable({
  providedIn: 'root'
})
export class TrainerServiceService {
  private _trainer?: Trainer;
  constructor() {
    this._trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer);
  }
  get trainer(): Trainer | undefined {
    return this._trainer;
  } 
  set trainer(pokemonTrainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, pokemonTrainer!);
    this._trainer = pokemonTrainer;
  }

  public inFavouritePokemon(pokemonName: any): boolean {
    if (this._trainer) {

       return Boolean(this._trainer?.pokemon.find(pokemon => {
        return pokemon.name == pokemonName
      }
      ));

    }
    return false;
  }
  public addToFavourites(newPokemon: Pokemon): void {
    if (this._trainer) {
      this._trainer.pokemon.push(newPokemon)
    }
  }

  public removeFromFavourites(pokemonName: string): Pokemon[] {
    if (this._trainer) {
      return  this._trainer.pokemon.filter((pokemon: Pokemon) => pokemon.name != pokemonName);
    }
    return [];
  }
}
