// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserServices } from './users.service';
import { Logger } from '@nestjs/common'; // Import Logger if needed
import { ModelModule } from 'src/models/models.module';

@Module({
  imports: [ModelModule], // Import ModelModule for access to Mongoose models and connection
  controllers: [UsersController],
  providers: [UserServices, Logger], // Provide UserServices and Logger if needed
  exports: [Logger], // Export Logger if you want other modules to use it
})
export class UsersModule {}