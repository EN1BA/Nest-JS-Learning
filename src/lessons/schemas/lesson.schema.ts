import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LessonDocument = Lesson & Document;

@Schema()
export class Lesson {
  @Prop()
  name: string;

  @Prop()
  duration: string;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
