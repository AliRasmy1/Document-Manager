import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaggingController } from './tagging.controller';
import { TaggingService } from './tagging.service';
import { FileSchema } from '../file-upload/schemas/file.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'File', schema: FileSchema }]),
  ],
  controllers: [TaggingController],
  providers: [TaggingService],
  exports: [TaggingService],
})
export class TaggingModule {}