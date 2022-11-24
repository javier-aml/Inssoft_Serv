import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './user/user.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';

@Module({
  controllers: [AppController, UserController],
  providers: [UserService, AppService],
})
export class AppModule {}
