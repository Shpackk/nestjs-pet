import { IsNumber } from 'class-validator';

export class DeleteRequestDto {
  @IsNumber()
  id: number;
}
