import { Body, Controller, Delete, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { DbUserDto } from './dto/dbUser.dto';
import { DeleteUserDto } from './dto/userDelete.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('create')
  async create(@Body() createUserDto: CreateUserDto): Promise<DbUserDto> {
    const { name, location } = await this.userService.create(createUserDto);
    return { name, location };
    //create user
  }
  @Delete('delete')
  async delete(@Body() deleteUserDto: DeleteUserDto): Promise<DbUserDto> {
    const { name, location } = await this.userService.delete(deleteUserDto);
    return { name, location };
    //delete user from db
  }
}
