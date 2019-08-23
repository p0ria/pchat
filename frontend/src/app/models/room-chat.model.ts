import {Room} from "./room.model";
import {User} from "./user.model";

export class RoomChat {
  public id!: number;
  public roomId!: number;
  public userId!: number;
  public text: string;
  public room!: Room;
  public user!: User;
}
