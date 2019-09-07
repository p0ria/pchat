import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "./auth.reducers";

const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const getError = createSelector(
  getAuthFeatureState,
  state => state.error
);

export const getIsLoginScreen = createSelector(
  getAuthFeatureState,
  state => state.isLoginScreen
);
