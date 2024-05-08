import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Comments {
  @Prop()
  videoId: mongoose.Schema.Types.ObjectId;

  @Prop()
  comment: String;
}
export const CommentSchema = SchemaFactory.createForClass(Comments);
