import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema'; // Assuming UserSchema is defined here

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs', {
      // Add any necessary Mongoose connection options here
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  exports: [MongooseModule], // Export MongooseModule for use by other modules
})
export class ModelModule {}