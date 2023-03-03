import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer.models';
import { environment } from 'src/environments/environment';


const {apiTrainer, apiKey} = environment;

@Injectable({
  providedIn: 'root'
})


export class LandingPagesService {

  constructor(private readonly http: HttpClient) { }

 /**
  * Log in a trainer by username.
  * @param {string} username The username of the trainer to log in.
  * @returns {Observable<Trainer>} An observable that emits the trainer after logging in.
  */
  public login(username: string): Observable<Trainer>{
    return this.checkTrainer(username)
      .pipe(
        switchMap((trainer?: Trainer) => {
          if(trainer === undefined){
            return this.createTrainer(username);
          }
          return of(trainer);
        })
      )
  }
   /**
   * Check if a trainer with the given username exists.
   * @param {string} username The username of the trainer to check.
   * @returns {Observable<Trainer | undefined>} An observable that emits the trainer if it exists, otherwise undefined.
   */
  private checkTrainer(username: string): Observable<Trainer | undefined>{
    return this.http.get<Trainer[]>(`${apiTrainer}?username=${username}`)
  .pipe(map((response: Trainer[]) => {
    return response.pop();

  }))
  };

   /**
   * Create a new trainer with the given username.
   * @param {string} username The username of the new trainer.
   * @returns {Observable<Trainer>} An observable that emits the new trainer after creating it.
   */
  private createTrainer(username: string): Observable<Trainer>{
    const trainer = {
      username,
      pokemon: []
    };
    // legger inn API key
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": apiKey
    });

    // lager en post request med ny trainer inn i API
    return this.http.post<Trainer>(apiTrainer, trainer, {
      headers
    })

  }
}