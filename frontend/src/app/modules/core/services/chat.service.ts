import {Injectable} from "@angular/core";
import {Socket} from "ngx-socket-io";
import {RoomChat} from "../../../models/room-chat.model";
import {Observable} from "rxjs";

@Injectable()
export class ChatService {
  constructor(private socket: Socket){}

  sendChat(chat: RoomChat){
    this.socket.emit('chat', chat);
  }

  receiveChat(): Observable<RoomChat>{
    return this.socket.fromEvent<RoomChat>('chat');
  }
}
