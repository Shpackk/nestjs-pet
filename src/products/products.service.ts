import { Injectable } from '@nestjs/common';
import { ProductEntity } from 'src/database/entities/product.entity';
import { ProductRepository } from 'src/database/repositories/product.repo';
import { UpdateResult } from 'typeorm';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository) {}

  async add(productDto: ProductDto): Promise<ProductEntity> {
    return await this.productRepository.add(productDto);
  }

  async update(productDto: ProductDto): Promise<UpdateResult> {
    return await this.productRepository.update(productDto);
  }

  async findAll(): Promise<ProductEntity[]> {
    return await this.productRepository.findAll();
  }
}
