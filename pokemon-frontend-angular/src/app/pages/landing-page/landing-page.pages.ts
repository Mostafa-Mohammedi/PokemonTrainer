import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.pages.html',
  styleUrls: ['./landing-page.pages.css']
})
export class LandingPagePages {
  constructor( private readonly router: Router){}

   public handleLogin(): void {
    this.router.navigateByUrl("pokemonCatalogue");
  }

}
 