import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { RepositoryModule } from '../repository/repository.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  imports: [AuthModule, RepositoryModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
