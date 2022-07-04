import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { RequestEntity } from 'src/database/entities/request.entity';
import { DeleteResult } from 'typeorm';
import { CreateRequestDto } from './dto/createRequest.dto';
import { DeleteRequestDto } from './dto/deleteRequest.dto';
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {
  constructor(private requestService: RequestService) {}
  @Post('create')
  async createRequest(
    @Body() createRequestDto: CreateRequestDto,
  ): Promise<RequestEntity> {
    return await this.requestService.create(createRequestDto);
  }
  @Delete('delete')
  async deleteRequest(
    @Param() deleteRequestDto: DeleteRequestDto,
  ): Promise<DeleteResult> {
    return await this.requestService.delete(deleteRequestDto);
  }
}
