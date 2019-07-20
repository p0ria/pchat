import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { RoomChat } from './room.chat.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  avatarUrl: string;

  @ManyToMany(type => User, user => user.rooms)
  users: User[];

  @OneToMany(type => RoomChat, chats => chats.room)
  chats!: RoomChat[];
}