import {ActionReducerMap} from "@ngrx/store";
import {reducer, State} from "./app.reducers";

export const reducers: ActionReducerMap<State> = {
  app: reducer
};
