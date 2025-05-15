import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum Permission {
  VIEW = 'VIEW',
  EDIT = 'EDIT',
  DOWNLOAD = 'DOWNLOAD',
}

@Schema({ timestamps: true })
export class AccessControl extends Document {
  @Prop({ required: true })
  fileId: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true, enum: Permission })
  permission: Permission;
}

export const AccessControlSchema = SchemaFactory.createForClass(AccessControl);