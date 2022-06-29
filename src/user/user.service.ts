import { Injectable } from '@nestjs/common';
import { DeleteUserDto } from './dto/userDelete.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { BcryptService } from 'src/services/bcrypt.service';
import { UserRepository } from 'src/database/repositories/user.repo';
import { UserEntity } from 'src/database/entities/user.entity';
import { DeleteResult } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    private bcryptService: BcryptService,
    private userRepository: UserRepository,
  ) {}
  create(createUserDto: CreateUserDto): UserEntity[] {
    return this.userRepository.create({
      ...createUserDto,
      hashPassword: this.bcryptService.hash(createUserDto.password),
    });
  }
  async delete(deleteUserDto: DeleteUserDto): Promise<DeleteResult> {
    return await this.userRepository.delete(deleteUserDto);
  }
}
