import {Action} from "@ngrx/store";
import {User} from "../models/user.model";
import {Room} from "../models/room.model";

export enum AppActionTypes {
  LoadToken = '[App] Load Token',
  LoadTokenSuccess = '[App] Load Token Success',
  GetProfile = '[App] Get Profile',
  GetProfileSuccess = '[App] Get Profile Success',
  GetProfileFail = '[App] Get Profile Fail',
  Logout = '[App] Logout',
  ClearLogin = '[App] Clear Login',
  Redirect = '[App] Redirect',
  UpdateUserRooms = '[App] Update User Rooms'
}

export class LoadToken implements Action {
  readonly type = AppActionTypes.LoadToken;
}

export class LoadTokenSuccess implements Action {
  readonly type = AppActionTypes.LoadTokenSuccess;
  constructor(public payload: string){}
}

export class GetProfile implements Action {
  readonly type = AppActionTypes.GetProfile;
  constructor(public payload: string){}
}

export class GetProfileSuccess implements Action {
  readonly type = AppActionTypes.GetProfileSuccess;
  constructor(public payload: User){}
}

export class GetProfileFail implements Action {
  readonly type = AppActionTypes.GetProfileFail;
  constructor(public payload: string){}
}

export class Logout implements Action {
  readonly type = AppActionTypes.Logout;
}

export class ClearLogin implements Action {
  readonly type= AppActionTypes.ClearLogin;
}

export class Redirect implements Action {
  readonly type = AppActionTypes.Redirect;
  constructor(public payload: string){}
}

export class UpdateUserRooms implements Action {
  readonly type = AppActionTypes.UpdateUserRooms;
  constructor(public payload: Room[]){}
}

export type AppActions =
  LoadToken |
  LoadTokenSuccess |
  GetProfile |
  GetProfileSuccess |
  GetProfileFail |
  Logout |
  ClearLogin |
  Redirect |
  UpdateUserRooms;
