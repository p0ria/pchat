import { Component } from '@angular/core';
import {LoginService} from './login.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  username: string;
  password: string;

  constructor(private readonly loginService: LoginService) { }

  login(form: NgForm){
    this.loginService.login(this.username, this.password);
  }

}
