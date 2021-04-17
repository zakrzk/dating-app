import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MatchesModule } from './matches/matches.module';
import { MongooseModule } from '@nestjs/mongoose';
import { connectionString } from './app.db';

@Module({
    imports: [UsersModule, MatchesModule, MongooseModule.forRoot(connectionString)],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {
}
