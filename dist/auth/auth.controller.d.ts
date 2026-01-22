import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: {
        name: string;
        email: string;
        password: string;
        role: string;
    }): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
}
