import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from "@nebular/theme";
import {AuthService} from "../../../core/services/auth.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

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
export class LoginComponent {
  isLoginScreen: boolean = true;


  items: NbMenuItem[] = [
    {
      title: 'Profile',
      expanded: true,
      children: [
        {
          title: 'Change Password',
          link: 'http://www.google.com',
          icon: 'star'
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
  hide: boolean = true;

  constructor(private readonly authService: AuthService){}

  changePage(toLogin: boolean) {
    this.isLoginScreen = toLogin;
    return false;
  }
}
