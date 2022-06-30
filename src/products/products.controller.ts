import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ProductEntity } from 'src/database/entities/product.entity';
import { UpdateResult } from 'typeorm';
import { ProductDto } from './dto/product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Post('add')
  async addProducts(@Body() productDto: ProductDto): Promise<ProductEntity> {
    return await this.productsService.add(productDto);
  }
  @Get('all')
  async findAll(): Promise<ProductEntity[]> {
    return await this.productsService.findAll();
  }
  @Patch('update')
  async updateProduct(@Body() productDto: ProductDto): Promise<UpdateResult> {
    return await this.productsService.update(productDto);
    //shoould return Promise<Product[]>
  }
}
