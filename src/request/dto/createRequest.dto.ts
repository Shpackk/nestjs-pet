import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class CreateRequestDto {
  @IsNotEmpty()
  @ValidateNested({ each: true })
  summary: Record<string, number>[];
  @IsString()
  location: string;
}
