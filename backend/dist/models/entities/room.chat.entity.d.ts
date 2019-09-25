import { Room } from './room.entity';
import { User } from './user.entity';
export declare class RoomChat {
    id: number;
    roomId: number;
    userId: number;
    text: string;
    room: Room;
    user: User;
}
