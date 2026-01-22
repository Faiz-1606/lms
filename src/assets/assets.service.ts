import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../storage/supabase.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AssetsService {
  constructor(private prisma: PrismaService,
    private supabaseService: SupabaseService
  ) {}

  async uploadAsset(file: Express.Multer.File, lessonId: string) {
  const supabase = this.supabaseService.getClient();
  const fileName = `${Date.now()}-${file.originalname}`;

  const { error } = await supabase.storage
    .from('course-assets')
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) throw error;

  const publicUrl = supabase.storage
    .from('course-assets')
    .getPublicUrl(fileName).data.publicUrl;

  return this.prisma.lesson.update({
    where: { id: lessonId },
    data: { assetUrl: publicUrl },
  });
}
}
