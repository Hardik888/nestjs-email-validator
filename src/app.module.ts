import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ], // Import UsersModule to use UserServices and controllers
})
export class AppModule { }
