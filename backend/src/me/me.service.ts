import { ForbiddenException, Injectable } from '@nestjs/common';
import { User } from '../models/entities/user.entity';
import { Repository } from 'typeorm';
import { Room } from '../models/entities/room.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoomDto } from '../models/dtos/create-room.dto';
import {RoomChat} from "../models/entities/room.chat.entity";
import {CreateChatDto} from "../models/dtos/create-chat.dto";

@Injectable()
export class MeService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Room) private readonly roomRepository: Repository<Room>,
    @InjectRepository(RoomChat) private readonly roomChatRepository: Repository<RoomChat>
  ) {}

  async getMe(userId: number): Promise<User> {
    return this.userRepository.findOne(userId, {
      relations: ['rooms', 'roomAdmins'],
    });
  }

  async joinRoom(userId: number, roomId: number): Promise<User> {
    let user = await this.getUser(userId, 'rooms');
    let room = await this.roomRepository.findOne(roomId);
    if (user.rooms.some(r => r.id == roomId)) return user;
    user.rooms.push(room);
    return this.userRepository.save(user);
  }

  async leaveRoom(userId: number, roomId: number): Promise<User>{
    let user = await this.getUser(userId, "rooms");
    let room = await this.roomRepository.findOne(roomId, {relations: ["admin"]});
    let index = user.rooms.findIndex(r => r.id == roomId);
    if(index == -1) return user;
    if(room.admin.id == userId) throw new ForbiddenException("Admin can not leave room");
    user.rooms.splice(index, 1);
    return this.userRepository.save(user);
  }

  async findAllRooms(userId: number): Promise<Room[]> {
    let user = await this.getUser(userId, 'rooms', 'rooms.users');
    return user.rooms;
  }

  async createRoom(userId: number, createRoomDto: CreateRoomDto): Promise<Room> {
    let user = await this.getUser(userId);
    return this.roomRepository.save({
      ...createRoomDto,
      admin: user,
      users: [user],
    });
  }
  
  async getRoomChats(roomId: number): Promise<RoomChat[] | null>{
    let room = await this.roomRepository.findOne(roomId, {relations: ["chats", "chats.user"]});
    return room ? room.chats : null;
  }
  
  async addRoomChat(createChatDto: CreateChatDto, userId: number, roomId: number): Promise<RoomChat | null>{
    let user = await this.getUser(userId);
    let room = await this.roomRepository.findOne(roomId);
    return this.roomChatRepository.save({
      ...createChatDto,
      user: user,
      room: room
    });
  }

  private getUser(userId: number, ...relations: string[]): Promise<User> {
    return this.userRepository.findOne(userId, { relations: relations });
  }
}
