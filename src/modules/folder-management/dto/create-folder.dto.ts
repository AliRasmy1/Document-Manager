import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFolderDto {
  @ApiProperty({
    description: 'Name of the folder',
    example: 'Project Documents',
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Parent folder ID (optional)',
    example: '5f8d8f9d8f9d8f9d8f9d8f9d',
    required: false,
  })
  @IsString()
  @IsOptional()
  parentId?: string;
}

export class UpdateFolderDto {
  @ApiProperty({
    description: 'New name for the folder',
    example: 'Updated Project Documents',
    required: true,
  })
  @IsString()
  name: string;
}