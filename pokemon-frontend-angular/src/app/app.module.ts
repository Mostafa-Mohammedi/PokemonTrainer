import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PokemonCatalogueComponent } from './pages/pokemon-catalogue/pokemon-catalogue.component';
import { TrainerPageComponent } from './pages/trainer-page/trainer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PokemonCatalogueComponent,
    TrainerPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
