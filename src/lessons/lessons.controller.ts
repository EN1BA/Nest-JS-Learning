import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateLessonDTO } from './dto/createLesson.dto';
import { UpdateLessonDTO } from './dto/updateLesson.dto';
import { LessonsService } from './lessons.service';
import { Lesson } from './schemas/lesson.schema';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Get()
  getAllLessons(): Promise<Lesson[]> {
    return this.lessonsService.getAllLessons();
  }

  @Get(':id')
  getLessonById(@Param('id') id: string): Promise<Lesson> {
    return this.lessonsService.getLessonById(id);
  }

  @Post()
  createLesson(@Body() createLesson: CreateLessonDTO): Promise<Lesson> {
    return this.lessonsService.createLesson(createLesson);
  }

  @Delete(':id')
  deleteLesson(@Param('id') id: string): Promise<Lesson> {
    return this.lessonsService.deleteLesson(id);
  }

  @Put(':id')
  update(
    @Body() updateLesson: UpdateLessonDTO,
    @Param('id') id: string,
  ): Promise<Lesson> {
    return this.lessonsService.updateLesson(id, updateLesson);
  }
}
