import { User } from './user.entity';
import { RoomChat } from './room.chat.entity';
export declare class Room {
    id: number;
    name: string;
    avatarUrlRelative: string;
    users: User[];
    admin: User;
    chats: RoomChat[];
}
