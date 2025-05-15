import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Folder extends Document {
  @Prop({ required: true, unique: true })
  folderId: string;

  @Prop({ required: true })
  name: string;

  // تحديد النوع بشكل صحيح
  @Prop({ type: String, required: false, default: null })
  parentId: string | null;
}

export const FolderSchema = SchemaFactory.createForClass(Folder);
