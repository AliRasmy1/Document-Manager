import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Folder } from './schemas/folder.schema';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FolderService {
  constructor(
    @InjectModel('Folder') private readonly folderModel: Model<Folder>,
  ) {}

  async create(createFolderDto: CreateFolderDto): Promise<Folder> {
    const newFolder = new this.folderModel({
      folderId: uuidv4(),
      name: createFolderDto.name,
      parentId: createFolderDto.parentId || null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return newFolder.save();
  }

  async findAll(): Promise<Folder[]> {
    return this.folderModel.find().exec();
  }

  async findOne(id: string): Promise<Folder> {
    const folder = await this.folderModel.findOne({ folderId: id }).exec();
    if (!folder) {
      throw new Error(`Folder with folderId ${id} not found.`);
    }
    return folder;
  }

  async update(id: string, updateFolderDto: UpdateFolderDto): Promise<Folder> {
    const updatedFolder = await this.folderModel.findOneAndUpdate(
      { folderId: id },
      { $set: { name: updateFolderDto.name, updatedAt: new Date() } },
      { new: true },
    ).exec();
  
    if (!updatedFolder) {
      throw new Error(`Folder with id ${id} not found.`);
    }
  
    return updatedFolder;
  }
  

  async remove(id: string): Promise<void> {
    await this.folderModel.deleteOne({ folderId: id }).exec();
  }
}