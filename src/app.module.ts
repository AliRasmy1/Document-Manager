import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileUploadModule } from './modules/file-upload/file-upload.module';
import { FileValidationModule } from './modules/file-validation/file-validation.module';
import { FolderManagementModule } from './modules/folder-management/folder.module';
import { TaggingModule } from './modules/tagging/tagging.module';
import { AccessControlModule } from './modules/access-control/access-control.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    FileUploadModule,
    FileValidationModule,
    FolderManagementModule,
    TaggingModule,
    AccessControlModule,
  ],
})
export class AppModule {} // تأكد من أن AppModule يتم تصديره هنا
