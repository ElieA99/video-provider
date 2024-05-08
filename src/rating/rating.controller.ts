import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Request, Response } from 'express';
@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  //create rating
  @Post(':id')
  create(@Body() createRatingDto: CreateRatingDto, res: Response, id: number) {
    try {
      return this.ratingService.create(createRatingDto, id);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  @Get()
  findAll(res: Response) {
    try {
      return this.ratingService.findAll();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
