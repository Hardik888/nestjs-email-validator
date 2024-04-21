import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ], 
})
export class AppModule { }
