import { Injectable } from '@nestjs/common';
import { User } from '../models/entities/user.entity';
import { Repository } from 'typeorm';
import { Room } from '../models/entities/room.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MeService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Room) private readonly roomRepository: Repository<Room>){}

  async joinRoom(userId: number, roomId: number): Promise<User>{
    let user = await this.getUser(userId,"rooms");
    let room = await this.roomRepository.findOne(roomId);
    if(user.rooms.some(r => r.id == roomId)) return user;
    user.rooms.push(room);
    return this.userRepository.save(user);
  }

  async findAllRooms(userId: number): Promise<Room[]>{
    let user = await this.getUser(userId,"rooms");
    return user.rooms;
  }

  private getUser(userId: number, ...relations: string[]): Promise<User>{
    return this.userRepository.findOne(userId, { relations: relations});
  }
}