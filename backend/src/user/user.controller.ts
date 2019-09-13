import {Body, Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {User} from "../models/entities/user.entity";
import {UserService} from "./user.service";
import {CreateUserDto} from "../models/dtos/create-user.dto";
import {UserDto} from "../models/dtos/user.dto";
import {FileInterceptor} from "@nestjs/platform-express";
import {multerOptions} from "./config";

@Controller('/api/users')
export class UserController{
    
    constructor(private userService: UserService){}
    
    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        let user = await this.userService.create(createUserDto.username, createUserDto.password, createUserDto.avatarUrlRelative);
        return new UserDto(user);
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('avatar', multerOptions))
    upload(@UploadedFile() file): string{
        return process.env.USERS_UPLOAD_LOCATION + file.filename;
    }
}