import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { FolderService } from './folder.service';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Folder Management')
@Controller('folders')
export class FolderController {
  constructor(private readonly folderService: FolderService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new folder' })
  @ApiResponse({ status: 201, description: 'Folder created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiBody({ type: CreateFolderDto })
  async create(@Body() createFolderDto: CreateFolderDto) {
    return this.folderService.create(createFolderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all folders' })
  @ApiResponse({ status: 200, description: 'Folders retrieved successfully' })
  async findAll() {
    return this.folderService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a folder by ID' })
  @ApiResponse({ status: 200, description: 'Folder retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Folder not found' })
  @ApiParam({ name: 'id', description: 'Folder ID', example: '5f8d8f9d8f9d8f9d8f9d8f9d' })
  async findOne(@Param('id') id: string) {
    return this.folderService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a folder' })
  @ApiResponse({ status: 200, description: 'Folder updated successfully' })
  @ApiResponse({ status: 404, description: 'Folder not found' })
  @ApiParam({ name: 'id', description: 'Folder ID', example: '5f8d8f9d8f9d8f9d8f9d8f9d' })
  @ApiBody({ type: UpdateFolderDto })
  async update(
    @Param('id') id: string,
    @Body() updateFolderDto: UpdateFolderDto,
  ) {
    return this.folderService.update(id, updateFolderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a folder' })
  @ApiResponse({ status: 200, description: 'Folder deleted successfully' })
  @ApiResponse({ status: 404, description: 'Folder not found' })
  @ApiParam({ name: 'id', description: 'Folder ID', example: '5f8d8f9d8f9d8f9d8f9d8f9d' })
  async remove(@Param('id') id: string) {
    return this.folderService.remove(id);
  }
}