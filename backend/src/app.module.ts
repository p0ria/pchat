import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomModule } from './room/room.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RoomModule
  ],
})
export class AppModule {}
