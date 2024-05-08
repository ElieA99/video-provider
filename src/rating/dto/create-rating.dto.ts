import { IsNumber, IsString } from 'class-validator';
export class CreateRatingDto {
  @IsNumber()
  ratings: number;
}
