import { User } from '../models/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) {}

  async findOne(username: string): Promise<User | undefined>{
    return this.userRepository.findOne(
      {where: { username: username}, relations: ["credential"]});
  }

  findById(id: number): Promise<User | undefined>{
    return this.userRepository.findOne(id);
  }
  
  create(username: string, password: string, avatarUrlRelative: string, role: string = 'user'): Promise<User>{
    return this.userRepository.save({
      username: username,
      role: role,
      avatarUrlRelative: avatarUrlRelative,
      credential: {
        password: password
      }
    });
  }
}