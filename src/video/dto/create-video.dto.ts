import { IsNumber, IsString } from 'class-validator';
export class CreateVideoDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  url: String;

  @IsNumber()
  duration: Number;

  @IsNumber()
  age: Number;
}
