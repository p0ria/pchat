import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {RoomService} from "../../core/services/room.service";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import * as joinActions from "./join.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {Room} from "../../../models/room.model";
import {User} from "../../../models/user.model";
import * as appActions from "../../../state/app.actions";

@Injectable()
export class JoinEffects {
  constructor(
    private actions$: Actions,
    private roomService: RoomService
  ){}

  @Effect()
  loadAllRooms$: Observable<Action> = this.actions$.pipe(
    ofType(joinActions.JoinActionTypes.LoadAllRooms),
    mergeMap(_ => this.roomService.getAllRooms()),
    map((rooms: Room[]) => new joinActions.LoadAllRoomsSuccess(rooms)),
    catchError(err => of(new joinActions.LoadAllRoomsFail(err.message)))
  );

  @Effect()
  joinRoom$: Observable<Action> = this.actions$.pipe(
    ofType(joinActions.JoinActionTypes.JoinRoom),
    mergeMap((action : joinActions.JoinRoom) =>
      this.roomService.joinRoom(action.payload)),
    mergeMap((user: User) => [
      new joinActions.JoinRoomSuccess(),
      new appActions.UpdateUserRooms(user.rooms)]),
    catchError(err => of(new joinActions.JoinRoomFail(err.message)))
  );

  @Effect()
  leaveRoom$: Observable<Action> = this.actions$.pipe(
    ofType(joinActions.JoinActionTypes.LeaveRoom),
    mergeMap((action : joinActions.LeaveRoom) =>
      this.roomService.leaveRoom(action.payload).pipe(
        mergeMap((user: User) => [
          new joinActions.LeaveRoomSuccess(),
          new appActions.UpdateUserRooms(user.rooms)]),
        catchError(err => of(new joinActions.LeaveRoomFail(err.message)))
      ))
  );
}
