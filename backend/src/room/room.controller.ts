import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { RoomService } from './room.service';
import { Room } from '../models/entities/room.entity';
import { CreateRoomDto } from 'src/models/dtos/create-room.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { multerOptions } from './config';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService){}

  @Get()
  async findAll(): Promise<Room[]> {
    return this.roomService.findAll();
  }

  @Post()
  create(createRoomDto: CreateRoomDto): Room{
    return this.roomService.create(createRoomDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  upload(@UploadedFile() file): Room{
    console.log(file);
    return null;
  }
}