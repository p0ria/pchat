import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Room } from './room.entity';
import { RoomChat } from './room.chat.entity';
import { UserCredential } from './user.credential.entity';


@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  avatarUrlRelative: string;

  @Column()
  role: string;

  @OneToOne(type => UserCredential, uc => uc.user)
  credential!: UserCredential;

  @ManyToMany(type => Room, room => room.users)
  @JoinTable()
  rooms: Room[];

  @OneToMany(type => RoomChat, roomChats => roomChats.user)
  roomChats!: RoomChat[];

  @OneToMany(type => Room, room => room.admin)
  roomAdmins: Room[];
}