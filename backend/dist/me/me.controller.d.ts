import { MeService } from './me.service';
import { RoomDto } from '../models/dtos/room.dto';
import { CreateRoomDto } from '../models/dtos/create-room.dto';
import { User } from '../models/entities/user.entity';
export declare class MeController {
    private readonly meService;
    constructor(meService: MeService);
    getProfile(req: any): Promise<User>;
    joinRoom(req: any, roomId: any): Promise<any>;
    leaveRoom(req: any, roomId: any): Promise<any>;
    allRooms(req: any): Promise<RoomDto[]>;
    createRoom(req: any, createRoomDto: CreateRoomDto): Promise<RoomDto>;
}
