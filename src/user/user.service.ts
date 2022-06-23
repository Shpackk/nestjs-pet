import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';
import { DeleteUserDto, UserDto } from './dto/userCreate.dto';

@Injectable()
export class UserService {
  private readonly users: User[] = [];
  create(userDto: UserDto) {
    this.users.push(userDto);
  }
  delete(deleteUserDto: DeleteUserDto) {
    this.users.pop();
    console.log(deleteUserDto);
    //delete user from db
  }
}
