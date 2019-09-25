import { RoomService } from './room.service';
import { CreateRoomDto } from '../models/dtos/create-room.dto';
import { RoomDto } from '../models/dtos/room.dto';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    findAll(): Promise<RoomDto[]>;
    create(createRoomDto: CreateRoomDto): Promise<RoomDto>;
    upload(file: any): string;
}
