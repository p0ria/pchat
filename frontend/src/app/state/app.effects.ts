import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";
import {Action, Store} from "@ngrx/store";
import * as appActions from "./app.actions";
import {catchError, map, mergeMap, tap} from "rxjs/operators";
import {AuthService} from "../modules/core/services/auth.service";
import * as fromRoot from "../state/app.reducers";

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
    private store: Store<fromRoot.State>) {
  }

  @Effect()
  loadToken$: Observable<Action> = this.actions$.pipe(
    ofType(appActions.AppActionTypes.LoadToken),
    mergeMap(_ => {
      let token = localStorage.getItem('pchat_token');
      if(token) return [new appActions.LoadTokenSuccess(token), new appActions.GetProfile(token)];
      else return [new appActions.Redirect('/login')];
    }),
  );

  @Effect()
  getProfile$: Observable<Action> = this.actions$.pipe(
    ofType(appActions.AppActionTypes.GetProfile),
    mergeMap((action: appActions.GetProfile) => this.authService.getProfile(action.payload).pipe(
      map(user => new appActions.GetProfileSuccess(user)),
      catchError(err => of(new appActions.GetProfileFail(err.message)))
    ))
  );

  @Effect()
  logout$: Observable<Action> = this.actions$.pipe(
    ofType(appActions.AppActionTypes.Logout),
    tap(_ => localStorage.clear()),
    mergeMap(action => [
      new appActions.ClearLogin(),
      new appActions.Redirect('/login')
    ])
  );

  @Effect({dispatch: false})
  redirect$ = this.actions$.pipe(
    ofType(appActions.AppActionTypes.Redirect),
    tap((action: appActions.Redirect) => this.router.navigateByUrl(action.payload))
  );

}
