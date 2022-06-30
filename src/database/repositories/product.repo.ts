import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/products/dto/product.dto';
import { Repository, UpdateResult } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private productQuery: Repository<ProductEntity>,
  ) {}
  async add(productDto: ProductDto) {
    return await this.productQuery.save(productDto);
  }
  async findAll(): Promise<ProductEntity[]> {
    return await this.productQuery.find();
  }
  async update(productDto: ProductDto): Promise<UpdateResult> {
    return await this.productQuery.update(
      {
        name: productDto.name,
      },
      productDto,
    );
  }
}
