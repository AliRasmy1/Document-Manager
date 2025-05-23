import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class File extends Document {
  @ApiProperty({
    description: 'Unique file ID',
    example: '5f8d8f9d8f9d8f9d8f9d8f9d',
  })
  @Prop({ required: true, unique: true })
  fileId: string;

  @ApiProperty({
    description: 'Original file name',
    example: 'report.pdf',
  })
  @Prop({ required: true })
  originalName: string;

  @ApiProperty({
    description: 'File MIME type',
    example: 'application/pdf',
  })
  @Prop({ required: true })
  mimeType: string;

  @ApiProperty({
    description: 'File size in bytes',
    example: 1024,
  })
  @Prop({ required: true })
  size: number;

  @ApiProperty({
    description: 'Storage path of the file',
    example: 'uploads/123456789_report.pdf',
  })
  @Prop({ required: true })
  storagePath: string;

  @ApiProperty({
    description: 'File title',
    example: 'Annual Report',
  })
  @Prop({ required: true })
  title: string;

  @ApiProperty({
    description: 'File description',
    example: 'Financial report for 2023',
    required: false,
  })
  @Prop()
  description: string;

  @ApiProperty({
    description: 'File tags',
    example: ['finance', 'report'],
    type: [String],
    required: false,
  })
  @Prop({ type: [String], default: [] })
  tags: string[];

  @ApiProperty({
    description: 'Parent folder ID',
    example: '5f8d8f9d8f9d8f9d8f9d8f9e',
    required: false,
  })
  @Prop()
  folderId?: string;
}

export const FileSchema = SchemaFactory.createForClass(File);