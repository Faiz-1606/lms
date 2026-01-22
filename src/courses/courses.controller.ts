import { Controller, Post, Get, Param, Body, UseGuards, Req } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('INSTRUCTOR')
  @Post()
  create(@Body() body: any, @Req() req: any) {
    return this.coursesService.createCourse(body, req.user.id);
  }

  @Get()
  findAll() {
    return this.coursesService.getAllCourses();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('STUDENT')
  @Post(':id/enroll')
  enroll(@Param('id') id: string, @Req() req: any) {
    return this.coursesService.enroll(req.user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.getCourse(id);
  }
}

