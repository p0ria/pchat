import {User} from "./user.model";
import {RoomChat} from "./room-chat.model";

export interface Room {
  id: number;
  name: string;
  avatarUrl: string;
  users: User[];
  admin: User;
  chats: RoomChat[];
}
