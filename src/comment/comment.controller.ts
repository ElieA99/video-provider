import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Request, Response } from 'express';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  //comment
  @Post(':id')
  create(@Body('comment') comment: string, res: Response, id: number) {
    try {
      return this.commentService.createcomment(comment, id);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
