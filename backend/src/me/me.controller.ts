import { Body, Controller, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MeService } from './me.service';
import { RoomDto } from '../models/dtos/room.dto';
import { CreateRoomDto } from '../models/dtos/create-room.dto';
import { User } from '../models/entities/user.entity';

@Controller('api/me')
export class MeController {

  constructor(private readonly meService: MeService){}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  getProfile(@Request() req): Promise<User>{
    return this.meService.getMe(req.user.id);
  }

  @Put('rooms/:id/join')
  @UseGuards(AuthGuard('jwt'))
  async joinRoom(@Request() req, @Param('id') roomId): Promise<any>{
    const result = await this.meService.joinRoom(req.user.id, +roomId);
    return {...result, rooms: result.rooms.map(r => new RoomDto(r))};
  }

  @Put('rooms/:id/leave')
  @UseGuards(AuthGuard('jwt'))
  async leaveRoom(@Request() req, @Param('id') roomId): Promise<any>{
    const result = await this.meService.leaveRoom(req.user.id, +roomId);
    return {...result, rooms: result.rooms.map(r => new RoomDto(r))};
  }


  @Get('rooms')
  @UseGuards(AuthGuard('jwt'))
  allRooms(@Request() req): Promise<RoomDto[]>{
    return this.meService.findAllRooms(req.user.id)
      .then(rooms => {
        return rooms.map(r => new RoomDto(r))
      });
  }

  @Post('rooms')
  @UseGuards(AuthGuard('jwt'))
  createRoom(@Request() req, @Body() createRoomDto: CreateRoomDto): Promise<RoomDto>{
    return this.meService.createRoom(req.user.id, createRoomDto)
      .then(r => new RoomDto(r));
  }
}