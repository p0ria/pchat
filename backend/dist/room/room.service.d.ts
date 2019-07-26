import { Room } from '../models/entities/room.entity';
import { Repository } from 'typeorm';
import { CreateRoomDto } from '../models/dtos/create-room.dto';
export declare class RoomService {
    private readonly roomRepository;
    constructor(roomRepository: Repository<Room>);
    findAll(): Promise<Room[]>;
    create(createRoomDto: CreateRoomDto): Promise<Room>;
}
