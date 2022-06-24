import { Injectable } from '@nestjs/common';
import { UserInterface } from 'src/interfaces/user.interface';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private readonly users: UserInterface[] = [];
  login(loginDto: LoginDto) {
    console.log(loginDto);
    //check in db, and gen token
  }
}
