import { Injectable } from '@angular/core';
import { StorageUtil } from 'src/utils/storage.utils';
import { StorageKeys } from '../enum/storage-keys';
import { Trainer } from '../models/Trainer.models';

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
}
