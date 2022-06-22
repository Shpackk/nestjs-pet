import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/userLogin.dto';

@Controller('user')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() userLoginDto: UserLoginDto): void {
    this.authService.login(userLoginDto);
    //return success if login made it
  }
}
