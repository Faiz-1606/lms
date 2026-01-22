import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  createCourse(data: any, instructorId: string) {
    return this.prisma.course.create({
      data: {
        title: data.title,
        description: data.description,
        instructorId,
      },
    });
  }

  getAllCourses() {
    return this.prisma.course.findMany({
      include: { instructor: true },
    });
  }

  enroll(userId: string, courseId: string) {
    return this.prisma.enrollment.create({
      data: {
        userId,
        courseId,
      },
    });
  }

  getCourse(id: string) {
    return this.prisma.course.findUnique({
      where: { id },
      include: {
        modules: {
          include: {
            lessons: true,
          },
        },
      },
    });
  }
}
