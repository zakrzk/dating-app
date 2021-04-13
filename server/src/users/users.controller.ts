import {Body, Controller, Get, Post, Put} from '@nestjs/common';
import {UsersService} from './users.service';
import {User} from './user.model';
import {UserDto} from "./user.dto";

@Controller('users')

export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @Post()
    async createUser(@Body() data): Promise<User> {
        return await this.usersService.createUser({
                firstName: data.firstName,
                email: data.email,
                passwordHash: data.passwordHash,
                age: data.age,
                gender: data.gender,
                orientation: data.orientation,
                profession: data.profession,
                hobbies: data.hobbies,
                politicalEconomics: data.politicalEconomics,
                politicalDiplomatic: data.politicalDiplomatic,
                politicalCivil: data.politicalCivil,
                politicalSocietal: data.politicalSocietal
            }
        );
    }

    @Get()
    getAllUsersFromDb() {
        return this.usersService.getAllUsersFromDb();
    }

    @Put()
    test() {
        return 'test'
    }
}
