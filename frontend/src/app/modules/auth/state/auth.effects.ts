import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {AuthService} from "../../core/services/auth.service";
import * as authActions from "./auth.actions";
import * as appActions from "../../../state/app.actions";
import {catchError, map, mergeMap, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {User} from "../../../models/user.model";
import {Router} from "@angular/router";


@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router){}

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.Login),
    mergeMap((action: authActions.Login) =>
      this.authService.login(action.payload.username, action.payload.password).pipe(
        tap((result: {access_token: string}) => localStorage.setItem('pchat_token', result.access_token)),
        mergeMap((result: {access_token: string}) => [
          new authActions.LoginSuccess(),
          new appActions.LoadTokenSuccess(result.access_token),
          new appActions.GetProfile(result.access_token),
          new authActions.Redirect('/master')]),
        catchError( err => of(new authActions.LoginFail(err.message))))
    )
  );

  @Effect()
  register$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.Register),
    mergeMap((action: authActions.Register) =>
      this.authService.register(action.payload.username, action.payload.password).pipe(
        map((user: User) => new authActions.RegisterSuccess(user)),
        catchError( err => of(new authActions.RegisterFail(err.message)))
      )
    )
  );

  @Effect({dispatch: false})
  redirect$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.Redirect),
    tap((action: authActions.Redirect) => this.router.navigateByUrl(action.payload)),
  );





}
