import { PickType } from '@nestjs/mapped-types';
export class UserDto {
  name: string;
  login: string;
  location: string;
}

export class DeleteUserDto extends PickType(UserDto, ['login'] as const) {}
