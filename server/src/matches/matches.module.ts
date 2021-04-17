import { Module } from '@nestjs/common';
import { MatchesController } from './matches.controller';
import { MatchesService } from './matches.service';
import {MongooseModule} from "@nestjs/mongoose";
import {User} from "../users/user.model";
import {UserSchema} from "../users/user.schema";
import {UsersController} from "../users/users.controller";
import {UsersService} from "../users/users.service";

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
  controllers: [MatchesController, UsersController],
  providers: [MatchesService, UsersService],
})

export class MatchesModule {

}