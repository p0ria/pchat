import { Component } from '@angular/core';
import {LoginService} from './login.service';
import {NgForm} from '@angular/forms';
import {NbMenuItem} from "@nebular/theme";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  items: NbMenuItem[] = [
    {
      title: 'Profile',
      expanded: true,
      children: [
        {
          title: 'Change Password',
          link: 'http://www.google.com'
        },
        {
          title: 'Private Policy',
          url: 'http://www.zonipakhsh.ir/',
          icon: 'plus-outline'
        },
        {
          title: 'Logout',
          link: 'x'
        }
      ]
    },
    {
      title: 'Shopping Bag',
    },
    {
      title: 'Orders',
    },
  ];

  constructor(private readonly loginService: LoginService) { }


}
