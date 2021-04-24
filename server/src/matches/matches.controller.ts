import {Body, Controller, Get, Headers} from '@nestjs/common';
import {MatchesService} from './matches.service';
import * as jwt from 'jsonwebtoken';


@Controller('matches')

export class MatchesController {
    constructor(private readonly matchesService: MatchesService) {
    }

    @Get()
    async getMatch(
        @Headers('Authorization') bearer: string
    ): Promise<any> {
        const token = bearer.substring(7); // delete "Bearer " to get only the value
        const decoded = jwt.verify(token, "my_jwt_secret"); // verify token's authenticity
        console.log("decoded");
        console.log(JSON.stringify(decoded));
        return this.matchesService.getMatches(decoded.userId);
    }
}