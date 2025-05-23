import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export enum Permission {
  VIEW = 'VIEW',
  EDIT = 'EDIT',
  DOWNLOAD = 'DOWNLOAD',
}

@Schema({ timestamps: true })
export class AccessControl extends Document {
  @ApiProperty({
    description: 'The ID of the file',
    example: '5f8d8f9d8f9d8f9d8f9d8f9d',
  })
  @Prop({ required: true })
  fileId: string;

  @ApiProperty({
    description: 'The ID of the user',
    example: '5f8d8f9d8f9d8f9d8f9d8f9e',
  })
  @Prop({ required: true })
  userId: string;

  @ApiProperty({
    description: 'The permission type',
    enum: Permission,
    example: Permission.VIEW,
  })
  @Prop({ required: true, enum: Permission })
  permission: Permission;
}

export const AccessControlSchema = SchemaFactory.createForClass(AccessControl);