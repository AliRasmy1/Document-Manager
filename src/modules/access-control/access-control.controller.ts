import { Controller, Post, Body, Put, Get, Param } from '@nestjs/common';
import { AccessControlService } from './access-control.service';
import { AssignPermissionDto } from './dto/assign-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Access Control')
@Controller('access')
export class AccessControlController {
  constructor(private readonly accessControlService: AccessControlService) {}

  @Post()
  @ApiOperation({ summary: 'Assign permission to user for a file' })
  @ApiResponse({ status: 201, description: 'Permission assigned successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 409, description: 'Permission already exists' })
  @ApiBody({ type: AssignPermissionDto })
  async assignPermission(@Body() assignPermissionDto: AssignPermissionDto) {
    return this.accessControlService.assignPermission(assignPermissionDto);
  }

  @Put()
  @ApiOperation({ summary: 'Update permission for user on a file' })
  @ApiResponse({ status: 200, description: 'Permission updated successfully' })
  @ApiResponse({ status: 404, description: 'Permission not found' })
  @ApiBody({ type: UpdatePermissionDto })
  async updatePermission(@Body() updatePermissionDto: UpdatePermissionDto) {
    return this.accessControlService.updatePermission(updatePermissionDto);
  }

  @Get(':fileId')
  @ApiOperation({ summary: 'Get all permissions for a file' })
  @ApiResponse({ status: 200, description: 'Permissions retrieved successfully' })
  async getPermissions(@Param('fileId') fileId: string) {
    return this.accessControlService.getPermissions(fileId);
  }
}