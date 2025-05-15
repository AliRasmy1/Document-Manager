import { Test, TestingModule } from '@nestjs/testing';
import { FolderManagementController } from './folder.controller';

describe('FolderManagementController', () => {
  let controller: FolderManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FolderManagementController],
    }).compile();

    controller = module.get<FolderManagementController>(FolderManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
