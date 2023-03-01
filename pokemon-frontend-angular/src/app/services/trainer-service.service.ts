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

       return Boolean(this._trainer?.pokemon.find(pokemon => {
     //   console.log("pokemon fra listen:  ", pokemon.name)
      //  console.log("pokemon fra metoden:  ", pokemonName)


        return pokemon.name == pokemonName
      }
      ));

    }
    console.log("teeeeeeee")
    return false;

  }

  public addToFavourites(newPokemon: Pokemon): void {
    if (this._trainer) {
      this._trainer.pokemon.push(newPokemon)
    }
  }

  public removeFromFavourites(pokemonName: string): Pokemon[] {
    console.log("sjekker om pokemon trainer er valgt" ,this._trainer)
    if (this._trainer) {
      const arr = this._trainer.pokemon.filter((pokemon: Pokemon) => 
      
      {
        console.log("sjekk om pokemon navnet matcher ", pokemon.name != pokemonName)
        return pokemon.name != pokemonName
      
      
      })
      console.log("arrrrr",arr)
      return arr;
    }
    return [];


  }
}
