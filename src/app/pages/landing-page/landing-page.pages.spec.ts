import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPagePages } from './landing-page.pages';

describe('LandingPagePages', () => {
  let component: LandingPagePages;
  let fixture: ComponentFixture<LandingPagePages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPagePages ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPagePages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
