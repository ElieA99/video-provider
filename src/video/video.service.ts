import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { Video } from './entities/video.Shema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
@Injectable()
export class VideoService {
  constructor(@InjectModel(Video.name) private VideoSchema: Model<Video>) {}

  //post new video
  async createVideo(createVideoDto: CreateVideoDto) {
    const newVideo = await this.VideoSchema.create(createVideoDto);
    await newVideo.save();
    return newVideo;
  }

  //get all videos
  async findAll() {
    return this.VideoSchema.find();
  }

  //delete video
  async deleteVideo(id: string) {
    const filter = { _id: id };
    const deleted = await this.VideoSchema.deleteOne(filter);
    return deleted;
  }
}
