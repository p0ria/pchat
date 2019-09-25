import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";
import {User} from "../../../../models/user.model";
import {RoomService} from "../../../core/services/room.service";
import {Store} from "@ngrx/store";
import * as fromRooms from "../../state/room.reducers";

@Component({
  selector: 'app-room-dialog',
  templateUrl: './room-dialog.component.html',
  styleUrls: ['./room-dialog.component.scss']
})
export class RoomDialogComponent implements OnInit {
  @Input() id?: number;
  @Input() name: string;
  avatarUrl: string | null;
  avatarUrlRelative: string | null;


  constructor(
    private dialogRef: NbDialogRef<RoomDialogComponent>,
    private roomService: RoomService,
    private store: Store<fromRooms.State>) { }

  ngOnInit() {}

  onAvatarChanged(event) {
    let file = event.target.files[0];
    this.roomService.uploadAvatar(file).subscribe(
      (result: {avatarUrlRelative: string, avatarUrl: string}) =>{
        this.avatarUrl = result.avatarUrl;
        this.avatarUrlRelative = result.avatarUrlRelative;
      },
      err => {
        this.avatarUrl = null;
        this.avatarUrlRelative = null;
      }
    );
  }

  create() {
    this.dialogRef.close({
      name: this.name,
      avatarUrlRelative: this.avatarUrlRelative
    });
    return false;
  }

  cancel() {
    this.dialogRef.close();
  }
}
