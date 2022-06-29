import { Body, Controller, Delete, Post } from '@nestjs/common';
import { UserEntity } from 'src/database/entities/user.entity';
import { DeleteResult } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { DeleteUserDto } from './dto/userDelete.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('create')
  create(@Body() createUserDto: CreateUserDto): UserEntity[] {
    return this.userService.create(createUserDto);
    //create record of a new user
  }
  @Delete('delete')
  async delete(@Body() deleteUserDto: DeleteUserDto): Promise<DeleteResult> {
    return await this.userService.delete(deleteUserDto);
    //delete selected user from db
  }
}
