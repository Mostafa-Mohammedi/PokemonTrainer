import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './app/guard/auth-guard.guard';

import { LandingPagePages } from './app/pages/landing-page/landing-page.pages';
import { PokemonCataloguePages } from './app/pages/pokemon-catalogue/pokemon-catalogue.pages';
import { TrainerPagePages } from './app/pages/trainer-page/trainer-page.pages';

// documentation https://angular.io/guide/router med pathmach og redirectTo

 // setter opp routes constant hvor vi definerer routes våre
const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo:"/startup"},
    {path: 'startup', component: LandingPagePages},
    {path: 'trainerPage', component: TrainerPagePages, canActivate: [AuthGuardGuard]},
    {path: 'pokemonCatalogue', component: PokemonCataloguePages, canActivate: [AuthGuardGuard]},
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}