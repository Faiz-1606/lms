import { AssetsService } from './assets.service';
export declare class AssetsController {
    private assetsService;
    constructor(assetsService: AssetsService);
    upload(file: Express.Multer.File, lessonId: string): Promise<{
        id: string;
        title: string;
        type: string;
        assetUrl: string | null;
        moduleId: string;
    }>;
}
