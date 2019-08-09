import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from "@nebular/theme";

@Component({
  selector: 'master-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'Profile',
      expanded: true,
      icon: 'shopping-cart-outline',
      children: [
        {
          title: 'Change Password',
          link: 'http://www.google.com'
        },
        {
          title: 'Private Policy',
          url: 'http://www.zonipakhsh.ir/'
        },
        {
          title: 'Logout',
          link: 'x'
        }
      ]
    },
    {
      title: 'Shopping Bag',
      icon: 'star'
    },
    {
      title: 'Orders',
      icon: 'plus-outline'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
