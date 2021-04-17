import {Body, Controller, Get} from '@nestjs/common';
import {MatchesService} from './matches.service';

@Controller('matches')

export class MatchesController {
    constructor(private readonly matchesService: MatchesService) {

    }

    @Get()
    async getMatch(
        @Body('id1') UserId1: string,
        @Body('id2') UserId2: string,
    ): Promise<any> {
        return this.matchesService.getMatches(UserId1, UserId2);

    }
}