import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {select, Store} from "@ngrx/store";
import * as fromAuth from "../../state/auth.reducers";
import * as authSelectors from "../../state/auth.selectors";
import {Observable} from "rxjs";
import * as authActions from "../../state/auth.actions";

@Component({
  selector: "app-login-container",
  templateUrl: "login.container.component.html",
  styleUrls: ["login.container.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginContainerComponent implements OnInit{
  error$: Observable<string>;
  isLoginScreen$: Observable<boolean>;

  constructor(private store: Store<fromAuth.State>){}

  ngOnInit(): void {
    this.error$ = this.store.pipe(select(authSelectors.getError));
    this.isLoginScreen$ = this.store.pipe(select(authSelectors.getIsLoginScreen));
  }

  changeScreen(toLogin: boolean) {
    this.store.dispatch(new authActions.ChangeScreen(toLogin));
  }

  login(credential: {username: string, password: string}) {
    this.store.dispatch(new authActions.Login(credential));
  }

  register(credential: {username: string, password: string, avatar: File}){
    this.store.dispatch(new authActions.Register(credential));
  }
}
