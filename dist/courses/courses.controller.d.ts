import { CoursesService } from './courses.service';
export declare class CoursesController {
    private coursesService;
    constructor(coursesService: CoursesService);
    create(body: any, req: any): import(".prisma/client").Prisma.Prisma__CourseClient<{
        id: string;
        createdAt: Date;
        title: string;
        description: string;
        instructorId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
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
    enroll(id: string, req: any): import(".prisma/client").Prisma.Prisma__EnrollmentClient<{
        id: string;
        progress: number;
        userId: string;
        courseId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__CourseClient<({
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
