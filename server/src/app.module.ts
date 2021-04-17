import {Module} from '@nestjs/common';
import {ValidationPipe} from './users/validation.pipe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MatchesModule } from './matches/matches.module';
import { MongooseModule } from '@nestjs/mongoose';
import { connectionString } from './app.db';
import {APP_PIPE} from "@nestjs/core";

@Module({
    imports: [UsersModule, MatchesModule, MongooseModule.forRoot(connectionString)],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {
}
