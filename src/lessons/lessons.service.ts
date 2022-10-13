import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLessonDTO } from './dto/createLesson.dto';
import { UpdateLessonDTO } from './dto/updateLesson.dto';
import { Lesson, LessonDocument } from './schemas/lesson.schema';

@Injectable()
export class LessonsService {
  constructor(
    @InjectModel(Lesson.name) private lessonModel: Model<LessonDocument>,
  ) {}

  async getAllLessons(): Promise<Lesson[]> {
    return this.lessonModel.find().exec();
  }

  async getLessonById(id: string): Promise<Lesson> {
    return this.lessonModel.findById(id);
  }

  async createLesson(lesson: CreateLessonDTO): Promise<Lesson> {
    const newLesson = new this.lessonModel(lesson);
    return newLesson.save();
  }

  async updateLesson(id: string, lesson: UpdateLessonDTO): Promise<Lesson> {
    return this.lessonModel.findByIdAndUpdate(id, lesson, { new: true });
  }

  async deleteLesson(id: string): Promise<Lesson> {
    return this.lessonModel.findByIdAndRemove(id);
  }
}
