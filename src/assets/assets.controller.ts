import { Controller, Post, Param, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AssetsService } from './assets.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('assets')
export class AssetsController {
  constructor(private assetsService: AssetsService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('INSTRUCTOR')
  @Post(':lessonId/upload')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: Express.Multer.File, @Param('lessonId') lessonId: string) {
    return this.assetsService.uploadAsset(file, lessonId);
  }
}
