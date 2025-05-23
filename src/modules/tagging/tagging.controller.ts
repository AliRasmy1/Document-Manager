import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { TaggingService } from './tagging.service';
import { AddTagsDto } from './dto/add-tags.dto';
import { UpdateTagsDto } from './dto/update-tags.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Tagging')
@Controller('tags')
export class TaggingController {
  constructor(private readonly taggingService: TaggingService) {}

  @Post(':fileId')
  @ApiOperation({ summary: 'Add tags to a file' })
  @ApiResponse({ status: 200, description: 'Tags added successfully' })
  @ApiResponse({ status: 404, description: 'File not found' })
  @ApiParam({ name: 'fileId', description: 'File ID', example: '5f8d8f9d8f9d8f9d8f9d8f9d' })
  @ApiBody({ type: AddTagsDto })
  async addTags(
    @Param('fileId') fileId: string,
    @Body() addTagsDto: AddTagsDto,
  ) {
    return this.taggingService.addTags(fileId, addTagsDto.tags);
  }

  @Put(':fileId')
  @ApiOperation({ summary: 'Update tags for a file' })
  @ApiResponse({ status: 200, description: 'Tags updated successfully' })
  @ApiResponse({ status: 404, description: 'File not found' })
  @ApiParam({ name: 'fileId', description: 'File ID', example: '5f8d8f9d8f9d8f9d8f9d8f9d' })
  @ApiBody({ type: UpdateTagsDto })
  async updateTags(
    @Param('fileId') fileId: string,
    @Body() updateTagsDto: UpdateTagsDto,
  ) {
    return this.taggingService.updateTags(fileId, updateTagsDto.tags);
  }
}