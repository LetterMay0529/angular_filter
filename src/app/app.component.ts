import { Component } from '@angular/core';
import { ParticipantsService } from './participants/participants.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List of Participants';

  participants;
  display;

  constructor (service: ParticipantsService){
    this.display = this.participants = service.getParticipants()
  }

  showAll(){
    this.display = this.participants
  }

  filterGender(gender: string){
    this.display = this.participants.filter(participant => participant.gender === gender)
  }

}
