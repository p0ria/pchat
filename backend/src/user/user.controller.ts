import {Body, Controller, Post} from '@nestjs/common';
import {User} from "../models/entities/user.entity";
import {UserService} from "./user.service";
import {CreateUserDto} from "../models/dtos/create-user.dto";
import {UserDto} from "../models/dtos/user.dto";

@Controller('/api/users')
export class UserController{
    
    constructor(private userService: UserService){}
    
    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        let user = await this.userService.create(createUserDto.username, createUserDto.password);
        return new UserDto(user);
    }
}