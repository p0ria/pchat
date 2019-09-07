import * as fromRoot from '../../../state/app.reducers';
import {AuthActions, AuthActionTypes} from "./auth.actions";

export interface State extends fromRoot.State{
  auth: AuthState;
}

export interface AuthState {
  isLoginScreen: boolean
  error: string | null;
}

export const initialState: AuthState = {
  isLoginScreen: true,
  error: null
};

export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        error: null
      };

    case AuthActionTypes.LoginFail:
      return {
        ...state,
        error: action.payload
      };

    case AuthActionTypes.RegisterSuccess:
      return {
        ...state,
        isLoginScreen: true,
        error: null
      };

    case AuthActionTypes.RegisterFail:
      return {
        ...state,
        error: action.payload
      };

    case AuthActionTypes.ChangeScreen:
      return {
        ...state,
        isLoginScreen: action.payload
      };

    default:
      return state;
  }
}
