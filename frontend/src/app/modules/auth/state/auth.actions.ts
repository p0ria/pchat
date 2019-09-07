import {Action} from "@ngrx/store";
import {User} from "../../../models/user.model";

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFail = '[Auth] Login Fail',
  Register = '[Auth] Register',
  RegisterSuccess = '[Auth] Register Success',
  RegisterFail = '[Auth] Register Fail',
  ChangeScreen = '[Auth] Change Screen',
  Redirect = '[Auth] Redirect',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: { username: string, password: string }){}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
}

export class LoginFail implements Action {
  readonly type = AuthActionTypes.LoginFail;
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


export type AuthActions =
  Login |
  LoginSuccess |
  LoginFail |
  Register |
  RegisterSuccess |
  RegisterFail |
  ChangeScreen |
  Redirect;


