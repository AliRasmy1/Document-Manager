import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { File } from './schemas/file.schema';
import { FileValidationService } from '../file-validation/file-validation.service';
import { UploadFileDto } from './dto/upload-file.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FileUploadService {
  constructor(
    @InjectModel('File') private readonly fileModel: Model<File>,
    private readonly fileValidationService: FileValidationService,
  ) {}

  async uploadFile(file: Express.Multer.File, metadata: UploadFileDto) {
    // Validate file type and size
    await this.fileValidationService.validateFile(file.mimetype, file.size);

    const newFile = new this.fileModel({
      fileId: uuidv4(),
      originalName: file.originalname,
      mimeType: file.mimetype,
      size: file.size,
      storagePath: this.generateStoragePath(file.originalname),
      title: metadata.title,
      description: metadata.description,
      tags: metadata.tags || [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // In a real application, you would save the file to storage here
    // await this.storageService.saveFile(file.buffer, newFile.storagePath);

    return newFile.save();
  }

  private generateStoragePath(originalName: string): string {
    const timestamp = Date.now();
    const sanitizedName = originalName.replace(/[^a-zA-Z0-9.]/g, '_');
    return `uploads/${timestamp}_${sanitizedName}`;
  }
}