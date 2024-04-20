import { Module,Logger } from '@nestjs/common';
import { UserServices } from './users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UserServices,Logger],
  exports:[Logger],
})
export class UsersModule { }
