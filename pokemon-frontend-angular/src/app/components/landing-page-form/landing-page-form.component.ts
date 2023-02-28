import { Component, EventEmitter,Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trainer } from 'src/app/models/Trainer.models';
import { LandingPagesService } from 'src/app/services/landing-pages.service';
import { TrainerServiceService } from 'src/app/services/trainer-service.service';

@Component({
  selector: 'app-landing-page-form',
  templateUrl: './landing-page-form.component.html',
  styleUrls: ['./landing-page-form.component.css']
})
export class LandingPageFormComponent {
  @Output() login: EventEmitter<void> = new EventEmitter();

  constructor(
    private readonly trainerService: TrainerServiceService,
    private  readonly landingPageService : LandingPagesService
    
    ) {}

    loginSubmit(loginForm: NgForm): void {
      const { username } = loginForm.value;
      console.log(username);
      this.landingPageService.login(username).subscribe({
        next: (trainer: Trainer) => {
          this.trainerService.trainer = trainer;
          this.login.emit();
  
        }, error: () => {
  
        }
      })
    }
}
