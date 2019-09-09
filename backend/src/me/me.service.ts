import { ForbiddenException, Injectable } from '@nestjs/common';
import { User } from '../models/entities/user.entity';
import { Repository } from 'typeorm';
import { Room } from '../models/entities/room.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoomDto } from '../models/dtos/create-room.dto';

@Injectable()
export class MeService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Room) private readonly roomRepository: Repository<Room>,
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

  async createRoom(
    userId: number,
    createRoomDto: CreateRoomDto,
  ): Promise<Room> {
    let user = await this.getUser(userId);
    return this.roomRepository.save({
      ...createRoomDto,
      admin: user,
      users: [user],
    });
  }

  private getUser(userId: number, ...relations: string[]): Promise<User> {
    return this.userRepository.findOne(userId, { relations: relations });
  }
}
