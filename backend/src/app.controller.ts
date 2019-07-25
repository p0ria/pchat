import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RolesGuard } from './auth/roles/roles.guard';
import { Roles } from './auth/roles/roles.decorator';

@Controller('api')
export class AppController {

  constructor(private readonly authService: AuthService){}


  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Roles('user')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('me')
  getProfile(@Request() req){
    return req.user;
  }
}