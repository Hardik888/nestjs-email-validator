import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { modelModule } from './models/models.module';
@Module({
  imports: [UsersModule, modelModule]
})
export class AppModule { }
