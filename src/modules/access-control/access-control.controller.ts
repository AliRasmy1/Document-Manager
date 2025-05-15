import { Controller, Post, Body, Put, Get, Param } from '@nestjs/common';
import { AccessControlService } from './access-control.service';
import { AssignPermissionDto } from './dto/assign-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Controller('access')
export class AccessControlController {
  constructor(private readonly accessControlService: AccessControlService) {}

  @Post()
  async assignPermission(@Body() assignPermissionDto: AssignPermissionDto) {
    return this.accessControlService.assignPermission(assignPermissionDto);
  }

  @Put()
  async updatePermission(@Body() updatePermissionDto: UpdatePermissionDto) {
    return this.accessControlService.updatePermission(updatePermissionDto);
  }

  @Get(':fileId')
  async getPermissions(@Param('fileId') fileId: string) {
    return this.accessControlService.getPermissions(fileId);
  }
}