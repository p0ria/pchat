import { User } from '../models/entities/user.entity';
import { Repository } from 'typeorm';
import { Room } from '../models/entities/room.entity';
import { CreateRoomDto } from '../models/dtos/create-room.dto';
export declare class MeService {
    private readonly userRepository;
    private readonly roomRepository;
    constructor(userRepository: Repository<User>, roomRepository: Repository<Room>);
    getMe(userId: number): Promise<User>;
    joinRoom(userId: number, roomId: number): Promise<User>;
    leaveRoom(userId: number, roomId: number): Promise<User>;
    findAllRooms(userId: number): Promise<Room[]>;
    createRoom(userId: number, createRoomDto: CreateRoomDto): Promise<Room>;
    private getUser;
}
