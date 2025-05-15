import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { File } from '../file-upload/schemas/file.schema';

@Injectable()
export class TaggingService {
  constructor(
    @InjectModel('File') private readonly fileModel: Model<File>,
  ) {}

  async addTags(fileId: string, tags: string[]): Promise<File> {
    const file = await this.fileModel.findOneAndUpdate(
      { fileId },
      { $addToSet: { tags: { $each: tags } } },
      { new: true },
    ).exec();  

    if (!file) {
      throw new Error(`File with fileId ${fileId} not found.`);
    }

    return file;
  }

  async updateTags(fileId: string, tags: string[]): Promise<File> {
    const file = await this.fileModel.findOneAndUpdate(
      { fileId },
      { $set: { tags } },
      { new: true },
    ).exec(); 

    if (!file) {
      throw new Error(`File with fileId ${fileId} not found.`);
    }

    return file;
  }
}
