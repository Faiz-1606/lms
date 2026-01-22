import { PrismaService } from '../prisma/prisma.service';
export declare class CoursesService {
    private prisma;
    constructor(prisma: PrismaService);
    createCourse(data: any, instructorId: string): import(".prisma/client").Prisma.Prisma__CourseClient<{
        id: string;
        createdAt: Date;
        title: string;
        description: string;
        instructorId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getAllCourses(): import(".prisma/client").Prisma.PrismaPromise<({
        instructor: {
            id: string;
            name: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
            createdAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        title: string;
        description: string;
        instructorId: string;
    })[]>;
    enroll(userId: string, courseId: string): import(".prisma/client").Prisma.Prisma__EnrollmentClient<{
        id: string;
        progress: number;
        userId: string;
        courseId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getCourse(id: string): import(".prisma/client").Prisma.Prisma__CourseClient<({
        modules: ({
            lessons: {
                id: string;
                title: string;
                type: string;
                assetUrl: string | null;
                moduleId: string;
            }[];
        } & {
            id: string;
            title: string;
            courseId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        title: string;
        description: string;
        instructorId: string;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
