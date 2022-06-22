import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];
  add(product: Product) {
    this.products.push(product);
  }
  update(product: Product): Product[] {
    console.log(product);
    return this.products;
  }
  findAll(): Product[] {
    return this.products;
  }
}
