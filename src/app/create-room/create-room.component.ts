import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms.service';
import { Room } from "../room";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  room: Room = new Room();
  submitted = false;


  constructor(private roomsService: RoomsService, private router: Router) {

   }

  ngOnInit() {
  }

  newRoom():void{
    this.submitted= false;
    this.room = new Room();

  }
  save(){
    this.roomsService.createRoom(this.room)
    .subscribe(data=>console.log(data),
    error => console.log(error));
    this.room = new Room();
    this.goToList();
  }
  onSubmit(){
    this.submitted=true;
    this.save();
  }
  goToList(){
    this.router.navigate(['/rooms']);
  }


}