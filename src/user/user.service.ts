import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteUserDto } from './dto/userDelete.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { User, UserDocument } from './schemas/user.schema';
import { BcryptService } from 'src/services/bcrypt.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private bcryptService: BcryptService,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userModel.create({
      ...createUserDto,
      password: this.bcryptService.hash(createUserDto.password),
    });
  }
  async delete(deleteUserDto: DeleteUserDto): Promise<User> {
    return await this.userModel.findOneAndDelete({
      login: deleteUserDto.login,
    });
    //delete user from db
  }
}
