import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from "@nebular/theme";

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit() {
  }

  compact() {
    this.sidebarService.toggle(true);
  }
}
