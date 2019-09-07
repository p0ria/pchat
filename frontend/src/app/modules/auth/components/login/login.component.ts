import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import * as fromAuth from '../../state/auth.reducers';
import {select, Store} from "@ngrx/store";
import * as authActions from '../../state/auth.actions';
import * as authSelectors from '../../state/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({height: '0'}),
        animate('1s ease-in', style({height: '350px'}))
      ]),
      transition(':leave', [
        animate('1s ease-in', style({height: '0'}))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit{
  isLoginScreen: boolean;
  hide: boolean = true;
  password: string;
  username: string;
  error?: string;

  constructor(
    private store: Store<fromAuth.State>){
  }

  ngOnInit(): void {
    this.store.pipe(select(authSelectors.getError))
      .subscribe(err => this.error = err);
    this.store.pipe(select(authSelectors.getIsLoginScreen))
      .subscribe(isLoginScreen => this.isLoginScreen = isLoginScreen);
  }

  changePage(toLogin: boolean) {
    this.store.dispatch(new authActions.ChangeScreen(toLogin));
    return false;
  }

  login() {
    this.store.dispatch(
      new authActions.Login({username: this.username, password: this.password}));
  }

  register(){
    this.store.dispatch(
      new authActions.Register({username: this.username, password: this.password}));
  }
}
