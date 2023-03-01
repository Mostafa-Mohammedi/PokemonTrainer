import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageFormComponent } from './components/landing-page-form/landing-page-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { PokemonButtonComponent } from './components/pokemon-button/pokemon-button.component';
import { TrainerPagePages } from './pages/trainer-page/trainer-page.pages';
import { PokemonCataloguePages } from './pages/pokemon-catalogue/pokemon-catalogue.pages';
import { LandingPagePages } from './pages/landing-page/landing-page.pages';
import { AppRoutingModule } from 'src/app.routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageFormComponent,
    NavbarComponent,
    PokemonListComponent,
    PokemonListItemComponent,
    PokemonButtonComponent,
    TrainerPagePages,
    PokemonCataloguePages,
    LandingPagePages
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
