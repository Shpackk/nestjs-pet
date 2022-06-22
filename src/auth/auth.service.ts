import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';
import { UserLoginDto } from './dto/userLogin.dto';

@Injectable()
export class AuthService {
  private readonly users: User[] = [];
  login(userLoginDto: UserLoginDto) {
    console.log(userLoginDto);
    //check in db, and gen token
  }
}
