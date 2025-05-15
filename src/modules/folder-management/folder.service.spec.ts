import { Test, TestingModule } from '@nestjs/testing';
import { FolderManagementService } from './folder.service';

describe('FolderManagementService', () => {
  let service: FolderManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FolderManagementService],
    }).compile();

    service = module.get<FolderManagementService>(FolderManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
