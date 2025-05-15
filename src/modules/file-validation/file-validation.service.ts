import { Injectable, BadRequestException } from '@nestjs/common';
import { SUPPORTED_FILE_TYPES, MAX_FILE_SIZE } from './constants/file-constants';

@Injectable()
export class FileValidationService {
  async validateFile(mimeType: string, size: number): Promise<void> {
    if (!SUPPORTED_FILE_TYPES.includes(mimeType)) {
      throw new BadRequestException(
        `Unsupported file type. Supported types: ${SUPPORTED_FILE_TYPES.join(', ')}`,
      );
    }

    if (size > MAX_FILE_SIZE) {
      throw new BadRequestException(
        `File size exceeds maximum limit of ${MAX_FILE_SIZE / (1024 * 1024)}MB`,
      );
    }
  }
}