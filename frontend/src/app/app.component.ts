import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from "./state/app.reducers";
import * as appActions from "./state/app.actions";
import {NbIconLibraries} from "@nebular/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private store: Store<fromRoot.State>){}

  ngOnInit(): void {
    this.store.dispatch(new appActions.LoadToken());
  }



}
