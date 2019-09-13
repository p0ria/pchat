import { Component, OnInit } from '@angular/core';
import {Room} from "../../../../models/room.model";
import {Store} from "@ngrx/store";
import * as fromRoom from "../../state/room.reducers";
import * as roomSelectors from "../../state/room.selectors";
import * as roomActions from "../../state/room.actions";
import * as appSelectors from "../../../../state/app.selectors";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../../models/user.model";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  room: Room;
  user: User;
  messages: any[] = [];

  constructor(
    private store: Store<fromRoom.State>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      let selectedRoomId = params['id'];
      if(selectedRoomId){
        this.store.dispatch(new roomActions.SelectRoom(selectedRoomId));
        this.store.dispatch(new roomActions.LoadRoomChats(selectedRoomId));
      }
    } );

    this.store.select(roomSelectors.getSelectedRoom).subscribe(
      room => {
        this.room = room;
      }
    );

    this.store.select(appSelectors.getUser).subscribe(
      user => this.user = user
    );

    this.store.select(roomSelectors.getRoomChats).subscribe(
      chats => {
        if(chats && chats.length > 0)
          for(let i = this.messages.length; i < chats.length; i++){
            let chat = chats[i];
            this.addMessage(
              chat.text,
              chat.date,
              {id: chat.user.id, name: chat.user.username, avatar: chat.user.avatarUrl});
          }
        else this.messages = [];
      }
    )
  }

  sendMessage(event: any){
    let chat = {
      text: event.message,
      date: new Date(),
      roomId: this.room.id
    };
    this.store.dispatch(new roomActions.AddRoomChat(chat));
  }

  private addMessage(
    text: string,
    date: Date,
    user: {id: number, name: string, avatar: string}): void{
    this.messages.push({
      text: text,
      date: date,
      reply: user.id == this.user.id,
      user: {
        name: user.name,
        avatar: user.avatar
      }
    });
  }

}
