import {AuthService} from "./auth.service";
import {RoomService} from "./room.service";
import {ChatService} from "./chat.service";

export const PROVIDERS = [
  AuthService,
  RoomService,
  ChatService
];
