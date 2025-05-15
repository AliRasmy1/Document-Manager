import { IsString, IsEnum } from 'class-validator';
import { Permission } from '../schemas/access-control.schema';

export class UpdatePermissionDto {
  @IsString()
  fileId: string;

  @IsString()
  userId: string;

  @IsEnum(Permission)
  permission: Permission;
}