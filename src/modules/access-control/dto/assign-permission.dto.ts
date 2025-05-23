import { IsString, IsEnum } from 'class-validator';
import { Permission } from '../schemas/access-control.schema';
import { ApiProperty } from '@nestjs/swagger';

export class AssignPermissionDto {
  @ApiProperty({
    description: 'The ID of the file',
    example: '5f8d8f9d8f9d8f9d8f9d8f9d',
  })
  @IsString()
  fileId: string;

  @ApiProperty({
    description: 'The ID of the user',
    example: '5f8d8f9d8f9d8f9d8f9d8f9e',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'The permission to assign',
    enum: Permission,
    example: Permission.VIEW,
  })
  @IsEnum(Permission)
  permission: Permission;
}