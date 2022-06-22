import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dto/userCreate.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('create')
  create(@Body() userCreateDto: UserDto): void {
    this.userService.create(userCreateDto);
    //create user
  }
  delete(@Body() userCreateDto: UserDto): void {
    this.userService.delete(userCreateDto);
    //delete user from db
  }
}
