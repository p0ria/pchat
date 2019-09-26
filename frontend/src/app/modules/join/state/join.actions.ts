import {Action} from "@ngrx/store";
import {Room} from "../../../models/room.model";

export enum JoinActionTypes {
  LoadAllRooms = '[Join] Load All Rooms',
  LoadAllRoomsSuccess = '[Join] Load All Rooms Success',
  LoadAllRoomsFail = '[Join] Load All Rooms Fail',
  JoinRoom = '[Join] Join Room',
  JoinRoomSuccess = '[Join] Join Room Success',
  JoinRoomFail = '[Join] Join Room Fail',
  LeaveRoom = '[Join] Leave Room',
  LeaveRoomSuccess = '[Join] Leave Room Success',
  LeaveRoomFail = '[Join] Leave Room Fail'
}

export class LoadAllRooms implements Action {
  readonly type = JoinActionTypes.LoadAllRooms;
}

export class LoadAllRoomsSuccess implements Action {
  readonly type = JoinActionTypes.LoadAllRoomsSuccess;
  constructor(public payload: Room[]){}
}

export class LoadAllRoomsFail implements Action {
  readonly type = JoinActionTypes.LoadAllRoomsFail;
  constructor(public payload: string){}
}

export class JoinRoom implements Action {
  readonly type = JoinActionTypes.JoinRoom;
  constructor(public payload: number){}
}

export class JoinRoomSuccess implements Action {
  readonly type = JoinActionTypes.JoinRoomSuccess;
}

export class JoinRoomFail implements Action {
  readonly type = JoinActionTypes.JoinRoomFail;
  constructor(public payload: string){}
}

export class LeaveRoom implements Action {
  readonly type = JoinActionTypes.LeaveRoom;
  constructor(public payload: number){}
}

export class LeaveRoomSuccess implements Action {
  readonly type = JoinActionTypes.LeaveRoomSuccess;
}

export class LeaveRoomFail implements Action {
  readonly type = JoinActionTypes.LeaveRoomFail;
  constructor(public payload: string){}
}

export type JoinActions =
  LoadAllRooms |
  LoadAllRoomsSuccess |
  LoadAllRoomsFail |
  JoinRoom |
  JoinRoomSuccess |
  JoinRoomFail |
  LeaveRoom |
  LeaveRoomSuccess |
  LeaveRoomFail;
