import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {AuthService} from "../../core/services/auth.service";
import * as authActions from "./auth.actions";
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
        mergeMap((result: {access_token: string}) => [
          new authActions.LoginSuccess(result.access_token),
          new authActions.GetProfile(result.access_token),
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

  @Effect()
  getProfile$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.GetProfile),
    mergeMap((action: authActions.GetProfile) => this.authService.getProfile(action.payload).pipe(
      map(user => new authActions.GetProfileSuccess(user)),
      catchError(err => of(new authActions.GetProfileFail(err.message)))
    ))
  );

  @Effect()
  redirect$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.Redirect),
    tap((action: authActions.Redirect) => this.router.navigateByUrl(action.payload)),
    map(() => new authActions.RedirectSuccess())
  );



}
