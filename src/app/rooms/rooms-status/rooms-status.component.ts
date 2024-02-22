import { Component, Input } from '@angular/core';
import { room } from '../rooms';

@Component({
  selector: 'app-rooms-status',
  templateUrl: './rooms-status.component.html',
  styleUrl: './rooms-status.component.css'
})
export class RoomsStatusComponent  {

  @Input() spaces : room[] = [];


 

}
