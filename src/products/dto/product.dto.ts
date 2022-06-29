import { IsNumber, IsString } from 'class-validator';

export class ProductDto {
  @IsString()
  name: string;

  @IsNumber()
  amount: number;

  @IsNumber()
  price: number;
}
