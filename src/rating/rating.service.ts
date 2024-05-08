import { Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Rating } from './entities/rating.entity';
import { Model } from 'mongoose';

@Injectable()
export class RatingService {
  constructor(@InjectModel(Rating.name) private RatingSchema: Model<Rating>) {}

  //create rating fn
  async create(createRatingDto: CreateRatingDto, id: number) {
    const filter = { _id: id };
    const ratingg = await this.RatingSchema.create({
      filter,
      ...createRatingDto,
    });
    return ratingg;
  }

  //get all ratings
  async findAll() {
    return this.RatingSchema.find();
  }
}
