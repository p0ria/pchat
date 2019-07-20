import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Room } from './room.entity';
import { User } from './user.entity';

@Entity()
export class RoomChat {
  @PrimaryGeneratedColumn()
  public id!: number;

  public roomId!: number;
  public userId!: number;

  @Column()
  public text: string;

  @ManyToOne(type => Room, room => room.chats)
  public room!: Room;

  @ManyToOne(type => User, user => user.roomChats)
  public user!: User;
}