import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../../../models/room.model";
import {RoomChat} from "../../../models/room-chat.model";

@Injectable()
export class RoomService {
  constructor(private readonly http: HttpClient){}

  public getUserRooms(): Observable<Room[]>{
    return this.http.get<Room[]>(
      "http://localhost:3000/api/me/rooms"
    );
  }

  public getRoomChats(roomId: number): Observable<RoomChat[]>{
    return this.http.get<RoomChat[]>(
      `http://localhost:3000/api/me/rooms/${roomId}/chats`
    );
  }

  public addRoomChat(text: string, date: Date, roomId: number): Observable<RoomChat>{
    let body = JSON.stringify({
      text: text,
      date: date
    });
    return this.http.post<RoomChat>(
      `http://localhost:3000/api/me/rooms/${roomId}/chats`,
      body,
      {headers: {"Content-Type": "application/json"}}
    );
  }
}
