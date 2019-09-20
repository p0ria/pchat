import { User } from '../models/entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findOne(username: string): Promise<User | undefined>;
    findById(id: number): Promise<User | undefined>;
}
