import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PokemonCatalogueComponent } from './pages/pokemon-catalogue/pokemon-catalogue.component';
import { TrainerPageComponent } from './pages/trainer-page/trainer-page.component';
import { LandingPageFormComponent } from './components/landing-page-form/landing-page-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { PokemonButtonComponent } from './components/pokemon-button/pokemon-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PokemonCatalogueComponent,
    TrainerPageComponent,
    LandingPageFormComponent,
    NavbarComponent,
    PokemonListComponent,
    PokemonListItemComponent,
    PokemonButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
