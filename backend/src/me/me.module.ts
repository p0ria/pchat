import { Module } from '@nestjs/common';
import { User } from '../models/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from '../models/entities/room.entity';
import { AuthModule } from '../auth/auth.module';
import { MeController } from './me.controller';
import { MeService } from './me.service';
import {RoomChat} from "../models/entities/room.chat.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Room, RoomChat]),
    AuthModule
  ],
  controllers: [MeController],
  providers: [MeService]
})
export class MeModule {

}