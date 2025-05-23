import { IsArray, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddTagsDto {
  @ApiProperty({
    description: 'Array of tags to add',
    example: ['important', 'finance'],
    type: [String],
    required: true,
  })
  @IsArray()
  @IsString({ each: true })
  tags: string[];
}

export class UpdateTagsDto {
  @ApiProperty({
    description: 'New array of tags',
    example: ['urgent', 'reviewed'],
    type: [String],
    required: true,
  })
  @IsArray()
  @IsString({ each: true })
  tags: string[];
}