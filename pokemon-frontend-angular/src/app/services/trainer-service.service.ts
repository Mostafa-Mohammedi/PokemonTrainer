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
  // setter 
  // skal aldri gjøres om brukeren er undefined gjennom ! 
  set trainer(pokemonTrainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, pokemonTrainer!);
    this._trainer = pokemonTrainer;
  }

  public inFavouritePokemon(pokemonName: any): boolean {
   // console.log(this._trainer);
    if (this._trainer) {

       let sjekk =  Boolean(this._trainer?.pokemon.find((pokemon: Pokemon) => {
        console.log("pokemon fra listen:  ", pokemon.name)
        console.log("pokemon fra metoden:  ", pokemonName)


        pokemon.name == pokemonName
      }
      ));

      console.log(sjekk);
      return sjekk;
    }
    console.log("teeeeeeee")
    return false;

  }
}
