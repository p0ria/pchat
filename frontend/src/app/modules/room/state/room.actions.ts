import {Action} from "@ngrx/store";
import {Room} from "../../../models/room.model";

export enum RoomActionTypes {
  LoadUserRooms = '[Room] Load User Rooms',
  LoadUserRoomsSuccess = '[Room] Load User Rooms Success',
  LoadUserRoomsFail = '[Room] Load User Rooms Fail',
  SelectRoom = '[Room] Select Room'
}

export class LoadUserRooms implements Action {
  readonly type = RoomActionTypes.LoadUserRooms;
}

export class LoadUserRoomsSuccess implements Action {
  readonly type = RoomActionTypes.LoadUserRoomsSuccess;
  constructor(public payload: Room[]){}
}

export class LoadUserRoomsFail implements Action {
  readonly type = RoomActionTypes.LoadUserRoomsFail;
  constructor(public payload: string){}
}

export class SelectRoom implements Action {
  readonly type = RoomActionTypes.SelectRoom;
  constructor(public payload: number){}
}

export type RoomActions =
  LoadUserRooms |
  LoadUserRoomsSuccess |
  LoadUserRoomsFail |
  SelectRoom;
