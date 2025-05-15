import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessControlController } from './access-control.controller';
import { AccessControlService } from './access-control.service';
import { FileSchema } from '../file-upload/schemas/file.schema';
import { AccessControlSchema } from './schemas/access-control.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'File', schema: FileSchema },
      { name: 'AccessControl', schema: AccessControlSchema },
    ]),
  ],
  controllers: [AccessControlController],
  providers: [AccessControlService],
  exports: [AccessControlService],
})
export class AccessControlModule {}