import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoDto } from './create-video.dto';
import { IsNumber, IsString } from 'class-validator';
export class UpdateVideoDto extends PartialType(CreateVideoDto) {}
