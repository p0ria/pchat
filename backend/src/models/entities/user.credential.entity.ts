import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserCredential{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password!: string;

  @OneToOne(type => User, user => user.credential, {nullable: false})
  @JoinColumn()
  user!: User;
}