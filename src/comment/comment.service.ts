import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comments } from './entities/comment.entity';
@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comments.name) private CommentSchema: Model<Comments>,
  ) {}

  //create a comment
  async createcomment(comment: string, id: number) {
    const filter = { _id: id };
    const comments = await this.CommentSchema.create({
      filter,
      comment,
    });

    await comments.save();
    return comments;
  }

  // async createcomment(comment: CreateCommentDto, id: number) {
  //   const filter = { _id: id };
  //   const comments = await this.CommentSchema.create({
  //     filter,
  //     ...comment,
  //   });

  //   await comments.save();
  //   return comments;
  // }
}
