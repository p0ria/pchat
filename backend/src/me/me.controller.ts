import { Controller, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MeService } from './me.service';
import { Room } from '../models/entities/room.entity';

@Controller('api/me')
export class MeController {

  constructor(private readonly meService: MeService){}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  getProfile(@Request() req){
    return req.user;
  }

  @Put('rooms/:id/join')
  @UseGuards(AuthGuard('jwt'))
  async joinRoom(@Request() req, @Param('id') roomId){
    const { password, ...result} = await this.meService.joinRoom(req.user.id, roomId);
    return result;
  }

  @Get('rooms')
  @UseGuards(AuthGuard('jwt'))
  allRooms(@Request() req): Promise<Room[]>{
    return this.meService.findAllRooms(req.user.id);
  }
}