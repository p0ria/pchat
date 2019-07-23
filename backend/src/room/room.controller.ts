import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from '../models/dtos/create-room.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { multerOptions } from './config';
import { RoomDto } from '../models/dtos/room.dto';

@Controller('api/rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService){}

  @Get()
  async findAll(): Promise<RoomDto[]> {
    return this.roomService.findAll().then(
      rooms => rooms.map(r => new RoomDto(r)));
  }

  @Post()
  async create(@Body() createRoomDto: CreateRoomDto): Promise<RoomDto>{
    let room = await this.roomService.create(createRoomDto);
    return new RoomDto(room);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  upload(@UploadedFile() file): string{
    return process.env.ROOMS_UPLOAD_LOCATION + file.filename;
  }
}