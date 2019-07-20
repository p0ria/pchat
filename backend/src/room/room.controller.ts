import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoomService } from './room.service';
import { Room } from '../models/entities/room.entity';
import { CreateRoomDto } from 'src/models/dtos/create-room.dto';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService){}

  @Get()
  async findAll(): Promise<Room[]> {
    return this.roomService.findAll();
  }

  @Post()
  create(@Body() createRoomDto: CreateRoomDto): Room{
    return this.roomService.create(createRoomDto);
  }
}