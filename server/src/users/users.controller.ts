import {BadRequestException, Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from './users.service';
import {User} from './user.model';
import {UserDto} from "./user.dto";

@Controller('users')

export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @Post()
    async createUser(
        @Body() data: UserDto,
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('passwordHash') passwordHash: string,
        @Body('age') age: number,
        @Body('gender') gender: string,
        @Body('orientation') orientation: string[],
        @Body('profession') profession: string,
        @Body('hobbies') hobbies: string[],
        @Body('politicalEconomics') politicalEconomics: number,
        @Body('politicalDiplomatic') politicalDiplomatic: number,
        @Body('politicalCivil') politicalCivil: number,
        @Body('politicalSocietal') politicalSocietal: number,): Promise<User> {


        if (!email || !passwordHash) throw new BadRequestException();
        const newUser: User = await this.usersService.createUser(
            name,
            email,
            passwordHash,
            age,
            gender,
            orientation,
            profession,
            hobbies,
            politicalEconomics,
            politicalDiplomatic,
            politicalCivil,
            politicalSocietal
        );
        return newUser;
    }

    @Get()
    getAllUsersFromDb() {
        return this.usersService.getAllUsersFromDb();
    }
}
