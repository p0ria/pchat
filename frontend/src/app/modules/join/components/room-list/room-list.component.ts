import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromJoin from "../../state/join.reducers";
import * as joinActions from "../../state/join.actions";
import {Observable} from "rxjs";
import {Room} from "../../../../models/room.model";
import * as joinSelectors from "../../state/join.selectors";
import {User} from "../../../../models/user.model";
import * as appSelectors from "../../../../state/app.selectors";

@Component({
  selector: 'app-join',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  rooms$: Observable<Room[]>;
  user: User;

  constructor(private store: Store<fromJoin.State>){
    store.dispatch(new joinActions.LoadAllRooms());
  }

  ngOnInit() {
    this.rooms$ = this.store.select(joinSelectors.getRooms);
    this.store.select(appSelectors.getUser).subscribe(
      user => this.user = user
    );
  }

  joinChanged(roomId: number, joined: boolean) {
    this.store.dispatch(
      joined ?
        new joinActions.JoinRoom(roomId) :
        new joinActions.LeaveRoom(roomId)
    );
  }
}
