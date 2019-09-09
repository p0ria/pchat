import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {RoomService} from "../../core/services/room.service";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import * as roomActions from "./room.actions";
import {catchError, map, mergeMap} from "rxjs/operators";

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
}
