import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private readonly users: User[] = [];
  login(userLoginDto: LoginDto) {
    console.log(userLoginDto);
    //check in db, and gen token
  }
}
