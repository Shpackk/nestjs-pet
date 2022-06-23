import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';

@Module({
  imports: [AuthModule, ProductsModule, UserModule],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService, ProductsService, AuthService, UserService],
})
export class AppModule {}
