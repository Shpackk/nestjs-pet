import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
  compare(password: string, hash: string): boolean {
    try {
      return bcrypt.compareSync(password, hash);
    } catch (error) {
      throw error;
    }
  }
  hash(password: string): string {
    try {
      return bcrypt.hashSync(password, 10);
    } catch (error) {
      throw error;
    }
  }
}
