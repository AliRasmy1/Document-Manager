import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class Folder extends Document {
  @ApiProperty({
    description: 'Unique folder ID',
    example: '5f8d8f9d8f9d8f9d8f9d8f9d',
  })
  @Prop({ required: true, unique: true })
  folderId: string;

  @ApiProperty({
    description: 'Folder name',
    example: 'Project Documents',
  })
  @Prop({ required: true })
  name: string;

  @ApiProperty({
    description: 'Parent folder ID',
    example: '5f8d8f9d8f9d8f9d8f9d8f9e',
    required: false,
    nullable: true,
  })
  @Prop({ type: String, required: false, default: null })
  parentId: string | null;
}

export const FolderSchema = SchemaFactory.createForClass(Folder);