import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UserEntity } from 'src/database/entities/user.entity';
import { DeleteResult } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { DeleteUserDto } from './dto/userDelete.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('create')
  async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return await this.userService.create(createUserDto);
    //create record of a new user
  }
  @Delete('delete')
  async delete(@Body() deleteUserDto: DeleteUserDto): Promise<DeleteResult> {
    return await this.userService.delete(deleteUserDto);
    //delete selected user from db
  }

  @Get('list')
  async getAll(): Promise<UserEntity[]> {
    return await this.userService.getAll();
    //get all users from db
  }
}
