import { Controller, Request, Post, UseGuards, Get, Body, Param } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from './users/enitites/user.enitity';
import { User as UserInterface, UserDto } from './users/interfaces/user.interface';
import { CreateUserDto } from './users/dtos/CreateUser.dto';

@ApiBearerAuth()
@Controller()
export class AppController {
  constructor(private authService: AuthService) { }

  @ApiTags('authentication')
  @ApiResponse({
    status: 201,
    description: 'Registered successfully'
  })
  @Post('auth/register')
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.authService.register(createUserDto);
  }

  @ApiTags('authentication')
  @ApiResponse({
    status: 200,
    description: 'Logged in successfully'
  })
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() userDto: UserDto): Promise<any> {
    return this.authService.login(userDto);
  }

  @ApiTags('users')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: User,
  })
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return this.authService.getAll();
  }
}