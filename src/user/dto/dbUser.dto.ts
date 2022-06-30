import { OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './createUser.dto';

export class DbUserDto extends OmitType(CreateUserDto, ['password'] as const) {
  hashPassword: string;
}
