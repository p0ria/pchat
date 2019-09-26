import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from "../../../../models/room.model";
import {User} from "../../../../models/user.model";

@Component({
  selector: 'app-room-list-item',
  templateUrl: './room-list-item.component.html',
  styleUrls: ['./room-list-item.component.scss']
})
export class RoomListItemComponent implements OnInit {
  @Input() room: Room;
  @Input() user: User;
  @Output() joinChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  isJoined(roomId: number) {
    return this.user.rooms.some(r => r.id == roomId);
  }

  changeJoin(joined: boolean) {
    this.joinChanged.emit(joined);
  }

}
