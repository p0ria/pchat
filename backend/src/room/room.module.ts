import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from '../models/entities/room.entity';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Room])
  ],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {}