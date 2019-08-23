import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "./auth.reducers";

const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const getUser = createSelector(
  getAuthFeatureState,
  state => state.user
);

export const getToken = createSelector(
  getAuthFeatureState,
  state => state.token
);

export const getError = createSelector(
  getAuthFeatureState,
  state => state.error
);

export const getIsLoginScreen = createSelector(
  getAuthFeatureState,
  state => state.ui.isLoginScreen
);
