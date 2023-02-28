import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Trainer } from '../models/Trainer.models';
import { environment } from 'src/environments/environment';


const {apiTrainer, apiKey} = environment;

@Injectable({
  providedIn: 'root'
})
export class LandingPagesService {

  constructor(private readonly http: HttpClient) { }

  // Models, observable and RxJS operators 
  // login 
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

  
  // check if user exist 
  private checkTrainer(username: string): Observable<Trainer | undefined>{
    return this.http.get<Trainer[]>(`${apiTrainer}?username=${username}`)
  .pipe(map((response: Trainer[]) => {
    return response.pop();

  }))
  };

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