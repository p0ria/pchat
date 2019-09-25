import { Room } from './room.entity';
import { RoomChat } from './room.chat.entity';
import { UserCredential } from './user.credential.entity';
export declare class User {
    id: number;
    username: string;
    avatarUrl: string;
    role: string;
    credential: UserCredential;
    rooms: Room[];
    roomChats: RoomChat[];
    roomAdmins: Room[];
}
