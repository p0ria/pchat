import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from '../models/dtos/create-room.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from './config';
import { RoomDto } from '../models/dtos/room.dto';
import {UrlConfig} from "../config";

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
  @UseInterceptors(FileInterceptor('avatar', multerOptions))
  upload(@UploadedFile() file): {avatarUrlRelative: string, avatarUrl: string}{
    let relativeUrl = process.env.ROOMS_UPLOAD_LOCATION + file.filename;
    return {
      avatarUrlRelative: relativeUrl,
      avatarUrl: UrlConfig.BASE_ADDRESS + relativeUrl
    };
  }
}