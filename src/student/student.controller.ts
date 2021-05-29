import { FindTeacherResponseDto } from './../teacher/dto/teacher.dto';
import {
  CreateStudentDto,
  UpdateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
} from './dto/student.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): FindStudentResponseDto[] {
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): FindTeacherResponseDto {
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    return this.studentService.createStudent(body);
  }

  @Put('/:studentId')
  updateStudentById(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return this.studentService.updateStudentById(body, studentId);
  }
}
