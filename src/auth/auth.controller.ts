import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('user')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() userLoginDto: LoginDto): void {
    this.authService.login(userLoginDto);
    //return success if login made it
  }
}
