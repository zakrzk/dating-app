import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { connectionString } from './app.db';
import {UsersService} from "./users/users.service";

@Module({
    imports: [UsersModule, CommentsModule, MongooseModule.forRoot(connectionString)],
    controllers: [AppController],
    providers: [AppService, UsersService],
})

export class AppModule {
}
