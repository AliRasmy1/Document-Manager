import { IsString, IsOptional, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UploadFileDto {
  @ApiProperty({
    description: 'Title of the file',
    example: 'Annual Report 2023',
    required: true,
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Description of the file',
    example: 'Financial report for the year 2023',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Tags for the file',
    example: ['finance', 'report', '2023'],
    required: false,
    type: [String],
  })
  @IsArray()
  @IsOptional()
  tags?: string[];
}