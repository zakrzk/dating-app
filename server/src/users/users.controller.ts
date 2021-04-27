import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Post,
    Put
} from '@nestjs/common';
import {UsersService} from './users.service';
import {User} from './user.model';
import {UserDto} from "./user.dto";
import {ValidationPipe} from "./validation.pipe";

@Controller('users')

export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @Put()
    async createUser(
        @Body(new ValidationPipe()) createUserDto: UserDto
    ) {
        await this.usersService.createUser(createUserDto);
    }


    @Post()
    async loginUser(@Body() data): Promise<User> {
        return await this.usersService.loginUser({
                email: data.email,
                password: data.password,
            }
        );
    }

    // This should not be exposed to public in production!
    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

}

