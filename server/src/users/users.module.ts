import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserSchema } from './user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './user.model';

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService]
})

export class UsersModule {

}


