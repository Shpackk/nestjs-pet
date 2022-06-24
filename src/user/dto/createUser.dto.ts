import { IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  name: string;
  @IsString()
  login: string;
  @IsString()
  location: string;
  @IsString()
  password: string;
}
