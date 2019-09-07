import {User} from "../models/user.model";
import {AppActions, AppActionTypes} from "./app.actions";

export interface State {
  app: AppState;
}

export interface AppState {
  user: User;
  token: string | null;
  error: string | null;
}


const initialState: AppState = {
  user: null,
  token: null,
  error: null
};

export function reducer(state = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionTypes.LoadTokenSuccess:
      return {
        ...state,
        token: action.payload,
        error: null
      };

    case AppActionTypes.GetProfileSuccess:
      return {
        ...state,
        user: action.payload,
        error: null
      };

    case AppActionTypes.GetProfileFail:
      return {
        ...state,
        user: null,
        error: action.payload
      };

    case AppActionTypes.ClearLogin:
      return {
        ...state,
        token: null,
        user: null
      };

    default:
      return state;
  }

}
