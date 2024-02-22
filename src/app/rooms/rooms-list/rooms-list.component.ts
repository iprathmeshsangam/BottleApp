import { Component, Input, OnInit, input } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
})
export class RoomsListComponent implements OnInit {


  @Input() roomList : RoomList [] = [];

  constructor() {}
  ngOnInit(): void {}
}
