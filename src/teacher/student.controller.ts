import { Controller, Get, Param, ParseUUIDPipe, Put } from '@nestjs/common';
import { FindStudentResponseDto } from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getTeachers(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindStudentResponseDto[] {
    return this.studentService.getStudentsByTeacherId(teacherId);
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): FindStudentResponseDto {
    return this.studentService.updateStudentTeacher(studentId, teacherId);
  }
}
