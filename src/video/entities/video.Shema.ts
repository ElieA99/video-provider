import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Video {
  @Prop({ required: true })
  url: String;
  @Prop({ required: true })
  title: String;
  @Prop({ required: true })
  description: String;
  @Prop({ required: true })
  duration: Number;
  @Prop({ required: true })
  age: Number;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
