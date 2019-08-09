import { Component, OnInit } from '@angular/core';
import {NbSidebarService} from "@nebular/theme";

@Component({
  selector: 'master-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.sidebarService.toggle(true, "master-menu");
    return false;
  }
}
