import { Injectable } from '@angular/core';
import { Trainer } from '../models/Trainer.models';

@Injectable({
  providedIn: 'root'
})
export class TrainerServiceService {
  private _trainer?: Trainer;

  get trainer(): Trainer | undefined {
    return  this._trainer;

  }

  constructor() { }
}
