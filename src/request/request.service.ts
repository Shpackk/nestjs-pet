import { Injectable } from '@nestjs/common';
import { RequestEntity } from 'src/database/entities/request.entity';
import { RequestRepository } from 'src/database/repositories/request.repo';
import { DeleteResult } from 'typeorm';
import { CreateRequestDto } from './dto/createRequest.dto';
import { DeleteRequestDto } from './dto/deleteRequest.dto';

@Injectable()
export class RequestService {
  constructor(private requestRepository: RequestRepository) {}
  async create(createRequestDto: CreateRequestDto): Promise<RequestEntity> {
    return await this.requestRepository.create(createRequestDto);
  }
  async delete(deleteRequestDto: DeleteRequestDto): Promise<DeleteResult> {
    return await this.requestRepository.delete(deleteRequestDto);
    //should return DeleteResult e.g. true or false
  }
}
