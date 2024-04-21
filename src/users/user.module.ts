// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/database/database.module';
import { UserProvider } from './user.provider';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserProvider], // Provide UserServices and Logger if needed
  // Export Logger if you want other modules to use it
})
export class UserModule { }