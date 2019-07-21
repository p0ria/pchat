import { Room } from '../entities/room.entity';
import { UrlConfig } from '../../config';

export class RoomDto extends Room{

  constructor(props) {
    super();
    for(let p in props){
      this[p] = props[p];
    }
    this.avatarUrl = UrlConfig.BASE_ADDRESS + this.avatarUrlRelative;
  }

  readonly avatarUrl: string;
}