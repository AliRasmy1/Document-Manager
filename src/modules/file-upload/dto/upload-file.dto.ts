import { IsString, IsOptional, IsArray } from 'class-validator';

export class UploadFileDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsOptional()
  tags?: string[];
}