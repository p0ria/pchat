import * as fromRoot from "../../../state/app.reducers";
import {Room} from "../../../models/room.model";
import {JoinActions, JoinActionTypes} from "./join.actions";
import {act} from "@ngrx/effects";

export interface State extends fromRoot.State {
  join: JoinState;
}

export interface JoinState {
  rooms: Room[];
  error: string | null;
}

export const initialState: JoinState = {
  rooms: [],
  error: null
};

export function reducer(state = initialState, action: JoinActions): JoinState {
  switch (action.type) {
    case JoinActionTypes.LoadAllRoomsSuccess:
      return {
        ...state,
        rooms: action.payload,
        error: null
      };

    case JoinActionTypes.LoadAllRoomsFail:
      return {
        ...state,
        error: action.payload
      };

    case JoinActionTypes.JoinRoomSuccess:
      return state;

    case JoinActionTypes.JoinRoomFail:
      return {
        ...state,
        error: action.payload
      };

    case JoinActionTypes.LeaveRoomSuccess:
      return state;

    case JoinActionTypes.LeaveRoomFail:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}
