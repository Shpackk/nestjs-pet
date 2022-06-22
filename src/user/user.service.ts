import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';
import { UserDto } from './dto/userCreate.dto';

@Injectable()
export class UserService {
  private readonly users: User[] = [];
  create(userDto: UserDto) {
    this.users.push(userDto);
  }
  delete(userDto: UserDto) {
    this.users.pop();
    console.log(userDto);
    //delete user from db
  }
}
