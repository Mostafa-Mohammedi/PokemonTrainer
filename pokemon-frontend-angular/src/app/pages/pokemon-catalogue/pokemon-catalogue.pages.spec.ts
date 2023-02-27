import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCataloguePages } from './pokemon-catalogue.pages';

describe('PokemonCataloguePages', () => {
  let component: PokemonCataloguePages;
  let fixture: ComponentFixture<PokemonCataloguePages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCataloguePages ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCataloguePages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
