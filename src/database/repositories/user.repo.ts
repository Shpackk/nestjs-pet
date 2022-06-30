import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DbUserDto } from 'src/user/dto/dbUser.dto';
import { DeleteUserDto } from 'src/user/dto/userDelete.dto';
import { DeleteResult, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private userQuery: Repository<UserEntity>,
  ) {}
  async create(dbUserDto: DbUserDto): Promise<UserEntity> {
    return await this.userQuery.save(dbUserDto);
  }
  async delete(deleteUserDto: DeleteUserDto): Promise<DeleteResult> {
    return await this.userQuery.delete(deleteUserDto);
  }
  async getAll(): Promise<UserEntity[]> {
    return await this.userQuery.find();
  }
}
