import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';
import { ProductDto } from './dto/product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get('all')
  findAll(): Product[] {
    //should return Promise<Product[]>
    return this.productsService.findAll();
  }
  @Post('add')
  addProducts(@Body() productDto: ProductDto): void {
    this.productsService.add(productDto);
  }
  @Patch('update')
  updateProducts(@Body() productDto: ProductDto): Product[] {
    return this.productsService.update(productDto);
    //shoould return Promise<Product[]>
  }
}
