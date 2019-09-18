import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
export class LoginComponent{
  @Input() isLoginScreen: boolean;
  @Input() error?: string;
  @Output() changeScreen = new EventEmitter<boolean>();
  @Output() login = new EventEmitter<{username: string, password: string}>();
  @Output() register = new EventEmitter<{username: string, password: string, avatar: File}>();

  username: string;
  password: string;

  usernameRegister: string;
  passwordRegister: string;
  avatar: File;
  hide: boolean = true;

  changePage(toLogin: boolean) {
    this.changeScreen.emit(toLogin);
    return false;
  }

  loginUser() {
    this.login.emit({username: this.username, password: this.password});
    return false;
  }

  registerUser(){

    this.register.emit(
      {username: this.usernameRegister, password: this.passwordRegister, avatar: this.avatar});
    return false;
  }

  onFileChange(event) {
    this.avatar = event.target.files[0];
  }

  onKeyDown(event: KeyboardEvent) {
    if(event.key == "Enter"){
      event.preventDefault();
      this.loginUser();
    }

  }
}
