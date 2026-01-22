import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(data: {
        name: string;
        email: string;
        password: string;
        role: any;
    }): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
}
