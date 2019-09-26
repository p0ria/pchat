import {createFeatureSelector, createSelector} from "@ngrx/store";
import {JoinState} from "./join.reducers";

const getJoinFeatureState = createFeatureSelector<JoinState>('join');

export const getRooms = createSelector(
  getJoinFeatureState,
  state => state.rooms
);
