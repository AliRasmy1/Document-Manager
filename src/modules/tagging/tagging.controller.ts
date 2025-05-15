import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { TaggingService } from './tagging.service';
import { AddTagsDto } from './dto/add-tags.dto';
import { UpdateTagsDto } from './dto/update-tags.dto';

@Controller('tags')
export class TaggingController {
  constructor(private readonly taggingService: TaggingService) {}

  @Post(':fileId')
  async addTags(
    @Param('fileId') fileId: string,
    @Body() addTagsDto: AddTagsDto,
  ) {
    return this.taggingService.addTags(fileId, addTagsDto.tags);
  }

  @Put(':fileId')
  async updateTags(
    @Param('fileId') fileId: string,
    @Body() updateTagsDto: UpdateTagsDto,
  ) {
    return this.taggingService.updateTags(fileId, updateTagsDto.tags);
  }
}