import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestEntity } from 'src/database/entities/request.entity';
import { RequestRepository } from 'src/database/repositories/request.repo';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';

@Module({
  imports: [TypeOrmModule.forFeature([RequestEntity])],
  controllers: [RequestController],
  providers: [RequestService, RequestRepository],
})
export class RequestModule {}
