import {Action} from "@ngrx/store";
import {User} from "../../../models/user.model";

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFail = '[Auth] Login Fail',
  GetProfile = '[Auth] Get Profile',
  GetProfileSuccess = '[Auth] Get Profile Success',
  GetProfileFail = '[Auth] Get Profile Fail',
  Register = '[Auth] Register',
  RegisterSuccess = '[Auth] Register Success',
  RegisterFail = '[Auth] Register Fail',
  ChangeScreen = '[Auth] Change Screen',
  Redirect = '[Auth] Redirect',
  RedirectSuccess = '[Auth] Redirect Success'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: { username: string, password: string }){}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: string){}
}

export class LoginFail implements Action {
  readonly type = AuthActionTypes.LoginFail;
  constructor(public payload: string){}
}

export class GetProfile implements Action {
  readonly type = AuthActionTypes.GetProfile;
  constructor(public payload: string){}
}

export class GetProfileSuccess implements Action {
  readonly type = AuthActionTypes.GetProfileSuccess;
  constructor(public payload: User){}
}

export class GetProfileFail implements Action {
  readonly type = AuthActionTypes.GetProfileFail;
  constructor(public payload: string){}
}

export class Register implements Action {
  readonly type = AuthActionTypes.Register;
  constructor(public payload: { username: string, password: string}){}
}

export class RegisterSuccess implements Action {
  readonly type = AuthActionTypes.RegisterSuccess;
  constructor(public payload: User){}
}

export class RegisterFail implements Action {
  readonly type = AuthActionTypes.RegisterFail;
  constructor(public payload: string){}
}

export class ChangeScreen implements Action {
  readonly type = AuthActionTypes.ChangeScreen;
  constructor(public payload: boolean){}
}

export class Redirect implements Action {
  readonly type = AuthActionTypes.Redirect;
  constructor(public payload: string){}
}

export class RedirectSuccess implements Action {
  readonly type = AuthActionTypes.RedirectSuccess;
}


export type AuthActions =
  Login |
  LoginSuccess |
  LoginFail |
  GetProfile |
  GetProfileSuccess |
  GetProfileFail |
  Register |
  RegisterSuccess |
  RegisterFail |
  ChangeScreen |
  Redirect |
  RedirectSuccess;


