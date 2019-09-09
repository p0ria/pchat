import {RoomChat} from "./room-chat.model";
import {Room} from "./room.model";

export interface User {
  id: number;
  username: string;
  role: string;
  rooms: Room[];
  roomChats: RoomChat[];
  roomAdmins: Room[];
  avatarUrl: string;
}
