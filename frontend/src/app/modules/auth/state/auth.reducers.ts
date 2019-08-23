import {User} from "../../../models/user.model";
import * as fromRoot from '../../../state/app.state';
import {AuthActions, AuthActionTypes} from "./auth.actions";

export interface State extends fromRoot.State{
  auth: AuthState;
}

export interface AuthState {
  user: User;
  token: string | null;
  error: string | null;
  ui: {
    isLoginScreen: boolean
  }
}

const initialState: AuthState = {
  user: null,
  token: null,
  error: null,
  ui: {
    isLoginScreen: true
  }
};


export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        token: action.payload,
        error: null
      };

    case AuthActionTypes.GetProfileSuccess:
      return {
        ...state,
        user: action.payload,
        error: null
      };

    case AuthActionTypes.GetProfileFail:
      return {
        ...state,
        user: null,
        error: action.payload
      };

    case AuthActionTypes.LoginFail:
      return {
        ...state,
        error: action.payload
      };

    case AuthActionTypes.RegisterSuccess:
      return {
        ...state,
        error: null,
        ui: {
          ...state.ui,
          isLoginScreen: true
        }
      };

    case AuthActionTypes.RegisterFail:
      return {
        ...state,
        error: action.payload
      };

    case AuthActionTypes.ChangeScreen:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoginScreen: action.payload
        }
      };

    default:
      return state;
  }
}
