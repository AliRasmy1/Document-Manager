import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { FolderService} from './folder.service'
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';

@Controller('folders')
export class FolderController {
  constructor(private readonly folderService: FolderService) {}

  @Post()
  async create(@Body() createFolderDto: CreateFolderDto) {
    return this.folderService.create(createFolderDto);
  }

  @Get()
  async findAll() {
    return this.folderService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.folderService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFolderDto: UpdateFolderDto,
  ) {
    return this.folderService.update(id, updateFolderDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.folderService.remove(id);
  }
}