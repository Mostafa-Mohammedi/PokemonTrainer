import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.models';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.pages.html',
  styleUrls: ['./pokemon-catalogue.pages.css']
})
export class PokemonCataloguePages implements OnInit{

  constructor (
    private readonly pokemonCatalogueService: PokemonCatalogueService
  ) {}

  get pokemon(): Pokemon[] {
    return this.pokemonCatalogueService.pokemon;
  }

  get loading(): boolean {
    return this.pokemonCatalogueService.loading;
  }

  get error(): string {
    return this.pokemonCatalogueService.error;
  }
  
  ngOnInit(): void {
    this.pokemonCatalogueService.findAllPokemon();
  }

}
