import {Body, Controller, Get, Param, Post, Put, Req, Request, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MeService } from './me.service';
import { RoomDto } from '../models/dtos/room.dto';
import { CreateRoomDto } from '../models/dtos/create-room.dto';
import { User } from '../models/entities/user.entity';
import { UserDto } from '../models/dtos/user.dto';
import {RoomChat} from "../models/entities/room.chat.entity";
import {CreateChatDto} from "../models/dtos/create-chat.dto";

@Controller('api/me')
export class MeController {

  constructor(private readonly meService: MeService){}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getProfile(@Request() req): Promise<User>{
    let me = await this.meService.getMe(req.user.id);
    return new UserDto(me);
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
  
  @Get('rooms/:id/chats')
  @UseGuards(AuthGuard('jwt'))
  async getRoomChats(@Request() req, @Param('id') roomId): Promise<RoomChat[] | null>{
    return this.meService.getRoomChats(roomId).then(
        chats => {
          return chats ? chats.map(chat => {
            return {...chat, user: new UserDto(chat.user)}
          }) : null
        }
    );
  }
  
  @Post('rooms/:id/chats')
  @UseGuards(AuthGuard('jwt'))
  async addRoomChat(@Request() req, @Param('id') roomId, @Body() createChatDto: CreateChatDto): Promise<RoomChat | null>{
    return this.meService.addRoomChat(createChatDto, req.user.id, roomId);
  }
}