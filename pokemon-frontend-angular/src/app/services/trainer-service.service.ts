import { Injectable } from '@angular/core';
import { StorageUtil } from 'src/utils/storage.utils';
import { StorageKeys } from '../enum/storage-keys';
import { Pokemon } from "../models/pokemon.models";
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
    return  this._trainer;
  }
 // setter 
  // skal aldri gjøres om brukeren er undefined gjennom ! 
  set trainer(pokemonTrainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, pokemonTrainer!);
    this._trainer = pokemonTrainer;
  }

  public inFavouritePokemon(pokemonName: any): boolean {
    console.log(this._trainer);
    if (this._trainer) {
      console.log(pokemonName)
      console.log( Boolean(this._trainer?.pokemon.find((pokemon: Pokemon) =>{ 
        pokemon.name === pokemonName
        console.log("test " + pokemon)
      })))
      return Boolean(this._trainer?.pokemon.find((pokemon: Pokemon) => {
        console.log("aaaaaaaaa ", pokemon)
        pokemon.name === pokemonName
      }
      ));
    }
    return false;

  }
}
