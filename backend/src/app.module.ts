import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomModule } from './room/room.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { MeModule } from './me/me.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RoomModule,
    AuthModule,
    MeModule
  ],
  controllers: [AppController]
})
export class AppModule {}
