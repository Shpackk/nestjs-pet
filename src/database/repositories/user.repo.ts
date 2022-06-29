import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private userQuery: Repository<UserEntity>,
  ) {}
  create(createUserDto): UserEntity[] {
    try {
      return this.userQuery.create(createUserDto);
    } catch (error) {
      throw error;
    }
  }
  async delete(deleteUserDto): Promise<DeleteResult> {
    try {
      return await this.userQuery.delete(deleteUserDto);
    } catch (error) {
      throw error;
    }
  }
}
