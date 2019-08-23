import { UrlConfig } from '../../config';
import { User } from '../entities/user.entity';
import { RoomDto } from './room.dto';

export class UserDto extends User{

  constructor(props) {
    super();
    for(let p in props){
      this[p] = props[p];
    }
    this.avatarUrl = this.avatarUrlRelative ? UrlConfig.BASE_ADDRESS + this.avatarUrlRelative : null;
    this.rooms = this.rooms ? this.rooms.map(r => new RoomDto(r)) : null;
    this.roomAdmins = this.roomAdmins ? this.roomAdmins.map(r => new RoomDto(r)) : null;
  }

  readonly avatarUrl: string;
}