import * as mongoose from 'mongoose';

export const databaseProvider = {
  provide: "DB",
  useFactory: () => mongoose.createConnection('mongodb://localhost:27017/nestjs'),
}  