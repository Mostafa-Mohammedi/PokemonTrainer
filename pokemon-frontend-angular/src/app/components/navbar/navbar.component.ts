import { Component } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.models';
import { TrainerServiceService } from 'src/app/services/trainer-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  get trainer(): Trainer | undefined{

    return this.trainerService.trainer; 
  }
  constructor(
    private readonly trainerService: TrainerServiceService
  ){}

}
