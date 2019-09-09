import * as fromRoot from '../../../state/app.reducers';
import {Room} from "../../../models/room.model";
import {RoomActions, RoomActionTypes} from "./room.actions";

export interface State extends fromRoot.State{
  room: RoomState;
}

export interface RoomState {
  rooms: Room[];
  selectedRoomId: number | null;
  error: string | null;
}

export const initialState: RoomState = {
  rooms: null,
  selectedRoomId: null,
  error: null
};

export function reducer(state = initialState, action: RoomActions): RoomState {
  switch (action.type) {
    case RoomActionTypes.LoadUserRoomsSuccess:
      return {
        ...state,
        rooms: action.payload,
        error: null
      };

    case RoomActionTypes.LoadUserRoomsFail:
      return {
        ...state,
        error: action.payload
      };

    case RoomActionTypes.SelectRoom:
      return {
        ...state,
        selectedRoomId: action.payload
      };

    default:
      return state;
  }
}
