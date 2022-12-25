import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class HelloDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsOptional()
  age: number;
}
