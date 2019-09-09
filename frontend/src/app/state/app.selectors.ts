import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "./app.reducers";

const getAppFeatureState = createFeatureSelector<AppState>('app');

export const getToken = createSelector(
  getAppFeatureState,
  state => state.token
);

export const getUser = createSelector(
  getAppFeatureState,
  state => state.user
);

