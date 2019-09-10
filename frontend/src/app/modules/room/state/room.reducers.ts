import * as fromRoot from '../../../state/app.reducers';
import {Room} from "../../../models/room.model";
import {RoomActions, RoomActionTypes} from "./room.actions";
import {RoomChat} from "../../../models/room-chat.model";

export interface State extends fromRoot.State{
  room: RoomState;
}

export interface RoomState {
  rooms: Room[];
  selectedRoomId: number | null;
  selectedRoomChats: RoomChat[];
  error: string | null;
}

export const initialState: RoomState = {
  rooms: null,
  selectedRoomId: null,
  selectedRoomChats: [],
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

    case RoomActionTypes.LoadRoomChatsSuccess:
      return {
        ...state,
        selectedRoomChats: action.payload,
        error: null
      };

    case RoomActionTypes.LoadRoomChatsFail:
      return {
        ...state,
        selectedRoomChats: null,
        error: action.payload
      };

    case RoomActionTypes.AddRoomChatSuccess:
      return {
        ...state,
        selectedRoomChats: [...state.selectedRoomChats, action.payload],
        error: null
      };

    case RoomActionTypes.AddRoomChatFail:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}
