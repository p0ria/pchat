import {createFeatureSelector, createSelector} from "@ngrx/store";
import {RoomState} from "./room.reducers";

const getRoomFeatureState = createFeatureSelector<RoomState>('room');

export const getRooms = createSelector(
  getRoomFeatureState,
  state => state.rooms
);

export const getSelectedRoomId = createSelector(
  getRoomFeatureState,
  state => state.selectedRoomId
);

export const getError = createSelector(
  getRoomFeatureState,
  state => state.error
);

export const getSelectedRoom = createSelector(
  getRoomFeatureState,
  s => s.rooms ? s.rooms.find(r => r.id == s.selectedRoomId) : null
);
