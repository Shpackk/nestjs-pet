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
  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return await this.userRepository.create({
      ...createUserDto,
      hashPassword: this.bcryptService.hash(createUserDto.password),
    });
    //todo - fix UserEntity containing password property
  }
  async delete(deleteUserDto: DeleteUserDto): Promise<DeleteResult> {
    return await this.userRepository.delete(deleteUserDto);
  }
  async getAll(): Promise<UserEntity[]> {
    return await this.userRepository.getAll();
  }
}
