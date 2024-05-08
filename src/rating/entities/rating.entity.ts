import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Rating {
  @Prop()
  videoId: mongoose.Schema.Types.ObjectId;

  @Prop()
  ratings: number;
}
export const RatingSchema = SchemaFactory.createForClass(Rating);
