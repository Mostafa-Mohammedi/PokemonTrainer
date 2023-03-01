import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerPagePages } from './trainer-page.pages';

describe('TrainerPagePages', () => {
  let component: TrainerPagePages;
  let fixture: ComponentFixture<TrainerPagePages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerPagePages ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerPagePages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
