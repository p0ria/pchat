import {Action} from "@ngrx/store";
import {Room} from "../../../models/room.model";
import {RoomChat} from "../../../models/room-chat.model";
import {CreateRoomDto} from "../../../models/create-room.dto";

export enum RoomActionTypes {
  LoadUserRooms = '[Room] Load User Rooms',
  LoadUserRoomsSuccess = '[Room] Load User Rooms Success',
  LoadUserRoomsFail = '[Room] Load User Rooms Fail',
  SelectRoom = '[Room] Select Room',
  LoadRoomChats = '[Room] Load Room Chats',
  LoadRoomChatsSuccess = '[Room] Load Room Chats Success',
  LoadRoomChatsFail = '[Room] Load Room Chats Fail',
  AddRoomChat = '[Room] Add Room Chat',
  AddRoomChatSuccess = '[Room] Add Room Chat Success',
  AddRoomChatFail = '[Room] Add Room Chat Fail',
  SubscribeToChatsSocket = '[Room] Subscribe To Chats Socket',
  ChatReceivedSocket = '[Room] Chat Received Socket',
  SendChatSocket = '[Room] Send Chat Socket',
  CreateRoom = '[Room] Create Room',
  CreateRoomSuccess = '[Room] Create Room Success',
  CreateRoomFail = '[Room] Create Room Fail'
}

export class LoadUserRooms implements Action {
  readonly type = RoomActionTypes.LoadUserRooms;
}

export class LoadUserRoomsSuccess implements Action {
  readonly type = RoomActionTypes.LoadUserRoomsSuccess;
  constructor(public payload: Room[]){}
}

export class LoadUserRoomsFail implements Action {
  readonly type = RoomActionTypes.LoadUserRoomsFail;
  constructor(public payload: string){}
}

export class SelectRoom implements Action {
  readonly type = RoomActionTypes.SelectRoom;
  constructor(public payload: number){}
}

export class LoadRoomChats implements Action {
  readonly type = RoomActionTypes.LoadRoomChats;
  constructor(public payload: number){}
}

export class LoadRoomChatsSuccess implements Action {
  readonly type = RoomActionTypes.LoadRoomChatsSuccess;
  constructor(public payload: RoomChat[]){}
}

export class LoadRoomChatsFail implements Action {
  readonly type = RoomActionTypes.LoadRoomChatsFail;
  constructor(public payload: string){}
}

export class AddRoomChat implements Action {
  readonly type = RoomActionTypes.AddRoomChat;
  constructor(public payload: {text: string, date: Date, roomId: number}){}
}

export class AddRoomChatSuccess implements Action {
  readonly type = RoomActionTypes.AddRoomChatSuccess;
  constructor(public payload: RoomChat){}
}

export class AddRoomChatFail implements Action {
  readonly type = RoomActionTypes.AddRoomChatFail;
  constructor(public payload: string){}
}

export class SubscribeToChatsSocket implements Action {
  readonly type = RoomActionTypes.SubscribeToChatsSocket;
}

export class ChatReceivedSocket implements Action {
  readonly type = RoomActionTypes.ChatReceivedSocket;
  constructor(public payload: RoomChat){}
}

export class SendChatSocket implements Action {
  readonly type = RoomActionTypes.SendChatSocket;
  constructor(public payload: RoomChat){}
}

export class CreateRoom implements Action {
  readonly type = RoomActionTypes.CreateRoom;
  constructor(public payload: CreateRoomDto){}
}

export class CreateRoomSuccess implements Action {
  readonly type = RoomActionTypes.CreateRoomSuccess;
  constructor(public payload: Room){}
}

export class CreateRoomFail implements Action {
  readonly type = RoomActionTypes.CreateRoomFail;
  constructor(public payload: string){}
}

export type RoomActions =
  LoadUserRooms |
  LoadUserRoomsSuccess |
  LoadUserRoomsFail |
  SelectRoom |
  LoadRoomChats |
  LoadRoomChatsSuccess |
  LoadRoomChatsFail |
  AddRoomChat |
  AddRoomChatSuccess |
  AddRoomChatFail |
  SubscribeToChatsSocket |
  ChatReceivedSocket |
  SendChatSocket |
  CreateRoom |
  CreateRoomSuccess |
  CreateRoomFail;
