import {User} from "./user.model";
import {RoomChat} from "./room-chat.model";

export interface Room {
  id: number;
  name: string;
  avatarUrlRelative: string;
  users: User[];
  admin: User;
  chats: RoomChat[];
}
