import { Component, OnInit } from '@angular/core';
import { RoomList } from './rooms';
import { room } from './rooms';
import { any } from 'prop-types';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit {

  spaces : room  = {
    availableRooms :5,
    TotalRooms : 50,
    BookedRooms : 30,
    AvailableRoomStatus : true
  };


  roomList : RoomList [] = [
  {
    roomType : "Deluxe",
    roomPrice :1000,
    roomNumber : 101,
    checkIn : new Date('01-01-2024'),
    checkOut : new Date ('02-01-2024')
  },
  {
    roomType : "Private Suite",
    roomPrice :2000,
    roomNumber : 102,
    checkIn : new Date('03-01-2024'),
    checkOut : new Date ('04-01-2024')
  },
  {
    roomType : "Regular",
    roomPrice : 800,
    roomNumber : 100,
    checkIn : new Date('01-01-2024'),
    checkOut : new Date ('04-01-2024')
  },
  {
    roomType : "Business Meeting",
    roomPrice : 4500,
    roomNumber : 201,
    checkIn : new Date('01-01-2024'),
    checkOut : new Date ('04-01-2024'),
    RoomPhotos : ""
  }
];


  constructor(){

  }
  ngOnInit(): void {
    //we will write logic here

    
  }
}

