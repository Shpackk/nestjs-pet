import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRequestDto } from 'src/request/dto/createRequest.dto';
import { DeleteRequestDto } from 'src/request/dto/deleteRequest.dto';
import { DeleteResult, Repository } from 'typeorm';
import { RequestEntity } from '../entities/request.entity';

@Injectable()
export class RequestRepository {
  constructor(
    @InjectRepository(RequestEntity)
    private requestQuery: Repository<RequestEntity>,
  ) {}

  async create(createRequestDto: CreateRequestDto): Promise<RequestEntity> {
    return await this.requestQuery.save({
      ...createRequestDto,
      totalPrice: 10, //this field should be calculated
    });
  }
  async delete(deleteRequestDto: DeleteRequestDto): Promise<DeleteResult> {
    return await this.requestQuery.delete(deleteRequestDto);
  }
}
