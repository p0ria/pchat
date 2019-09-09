import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../../../models/room.model";

@Injectable()
export class RoomService {
  constructor(private readonly http: HttpClient){}

  public getUserRooms(): Observable<Room[]>{
    return this.http.get<Room[]>(
      "http://localhost:3000/api/me/rooms"
    );
  }
}
