import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { RoomChat } from './room.chat.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  avatarUrlRelative: string;

  @ManyToMany(type => User, user => user.rooms)
  users: User[];

  @ManyToOne(type => User, user => user.roomAdmins, {nullable: false})
  admin: User;

  @OneToMany(type => RoomChat, chats => chats.room)
  chats!: RoomChat[];
}