import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoom from "../../state/room.reducers";
import * as appSelectors from "../../../../state/app.selectors";
import * as roomSelectors from "../../state/room.selectors";
import * as roomActions from "../../state/room.actions";
import {Observable} from "rxjs";
import {Room} from "../../../../models/room.model";
import {NbDialogService} from "@nebular/theme";
import {RoomDialogComponent} from "../room-dialog/room-dialog.component";
import {CreateRoomDto} from "../../../../models/create-room.dto";


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  rooms$: Observable<Room[]>;

  constructor(
    private store: Store<fromRoom.State>,
    private dialogService: NbDialogService) {
    store.dispatch(new roomActions.LoadUserRooms());
  }

  ngOnInit() {
    this.rooms$ = this.store.select(roomSelectors.getRooms);
  }

  createRoom() {
    const dialogRef = this.dialogService.open<RoomDialogComponent>(RoomDialogComponent)
      .onClose.subscribe((result: CreateRoomDto) =>{
        if(result){
          this.store.dispatch(new roomActions.CreateRoom({
            name: result.name,
            avatarUrlRelative: result.avatarUrlRelative
          }));
        }
      });
  }
}
