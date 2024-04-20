import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule], // Import UsersModule to use UserServices and controllers
})
export class AppModule {}
