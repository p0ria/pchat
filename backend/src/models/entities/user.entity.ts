import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Room } from './room.entity';
import { RoomChat } from './room.chat.entity';


@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  avatarUrl: string;

  @Column({default: "user"})
  role: string;

  @ManyToMany(type => Room, room => room.users)
  @JoinTable()
  rooms: Room[];

  @OneToMany(type => RoomChat, roomChats => roomChats.user)
  roomChats!: RoomChat[];
}