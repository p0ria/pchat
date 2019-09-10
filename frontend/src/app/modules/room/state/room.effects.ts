import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {RoomService} from "../../core/services/room.service";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import * as roomActions from "./room.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {RoomChat} from "../../../models/room-chat.model";

@Injectable()
export class RoomEffects {
  constructor(
    private actions$: Actions,
    private roomService: RoomService
  ){}

  @Effect()
  loadUserRooms$: Observable<Action> = this.actions$.pipe(
    ofType(roomActions.RoomActionTypes.LoadUserRooms),
    mergeMap((action: roomActions.LoadUserRooms) =>
      this.roomService.getUserRooms()),
    map(rooms => new roomActions.LoadUserRoomsSuccess(rooms)),
    catchError(err => of(new roomActions.LoadUserRoomsFail(err.message)))
  );

  @Effect()
  loadRoomChats$: Observable<Action> = this.actions$.pipe(
    ofType(roomActions.RoomActionTypes.LoadRoomChats),
    mergeMap((action: roomActions.LoadRoomChats) =>
      this.roomService.getRoomChats(action.payload)),
    map(chats => new roomActions.LoadRoomChatsSuccess(chats)),
    catchError(err => of(new roomActions.LoadRoomChatsFail(err.message)))
  );

  @Effect()
  addRoomChat$: Observable<Action> = this.actions$.pipe(
    ofType(roomActions.RoomActionTypes.AddRoomChat),
    mergeMap((action: roomActions.AddRoomChat) =>
      this.roomService.addRoomChat(action.payload.text, action.payload.date, action.payload.roomId)),
    map(chat => new roomActions.AddRoomChatSuccess(chat)),
    catchError(err => of(new roomActions.AddRoomChatFail(err.message)))
  );
}
