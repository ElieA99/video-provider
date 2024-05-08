import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { Response } from 'express';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  //post new video
  @Post()
  create(@Body() createVideoDto: CreateVideoDto, res: Response) {
    try {
      return this.videoService.createVideo(createVideoDto);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  //get all videos available
  @Get()
  findAll(res: Response) {
    try {
      return this.videoService.findAll();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  //delete video
  @Delete(':id')
  deleteCat(@Param('id') id: string, res: Response) {
    try {
      return this.videoService.deleteVideo(id);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
