import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { AssetsModule } from './assets/assets.module';
import { StorageModule } from './storage/storage.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,   // makes env available everywhere
    }),
    PrismaModule,
    AuthModule,
    CoursesModule,
    AssetsModule,
    StorageModule,
  ],
})
export class AppModule {}

