import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AccessControl } from './schemas/access-control.schema';
import { AssignPermissionDto } from './dto/assign-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Injectable()
export class AccessControlService {
  constructor(
    @InjectModel('AccessControl')
    private readonly accessControlModel: Model<AccessControl>,
  ) {}

  async assignPermission(assignPermissionDto: AssignPermissionDto) {
    const existingPermission = await this.accessControlModel.findOne({
      fileId: assignPermissionDto.fileId,
      userId: assignPermissionDto.userId,
    });

    if (existingPermission) {
      throw new Error('Permission already exists for this user and file');
    }

    const newPermission = new this.accessControlModel({
      fileId: assignPermissionDto.fileId,
      userId: assignPermissionDto.userId,
      permission: assignPermissionDto.permission,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return newPermission.save();
  }

  async updatePermission(updatePermissionDto: UpdatePermissionDto) {
    return this.accessControlModel.findOneAndUpdate(
      {
        fileId: updatePermissionDto.fileId,
        userId: updatePermissionDto.userId,
      },
      {
        $set: {
          permission: updatePermissionDto.permission,
          updatedAt: new Date(),
        },
      },
      { new: true },
    );
  }

  async getPermissions(fileId: string) {
    return this.accessControlModel.find({ fileId }).exec();
  }
}