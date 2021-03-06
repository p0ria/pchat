import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from '../models/entities/room.entity';
import { Repository } from 'typeorm';
import { CreateRoomDto } from '../models/dtos/create-room.dto';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>){}

   findAll(): Promise<Room[]> {
     return this.roomRepository.find({relations: ["users", "admin"]});
   }

   create(createRoomDto: CreateRoomDto): Promise<Room> {
      return this.roomRepository.save(createRoomDto);
   }
}