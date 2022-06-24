import { PickType } from '@nestjs/mapped-types';
import { CreateUserDto } from './createUser.dto';

export class DeleteUserDto extends PickType(CreateUserDto, [
  'login',
] as const) {}
