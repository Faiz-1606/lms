import { SupabaseService } from '../storage/supabase.service';
import { PrismaService } from '../prisma/prisma.service';
export declare class AssetsService {
    private prisma;
    private supabaseService;
    constructor(prisma: PrismaService, supabaseService: SupabaseService);
    uploadAsset(file: Express.Multer.File, lessonId: string): Promise<{
        id: string;
        title: string;
        type: string;
        assetUrl: string | null;
        moduleId: string;
    }>;
}
