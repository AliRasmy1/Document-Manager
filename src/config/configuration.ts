import * as dotenv from 'dotenv';
dotenv.config();

export default () => ({
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/document-management',
  },
  fileStorage: {
    maxFileSize: process.env.MAX_FILE_SIZE || '10MB',
  },
});
