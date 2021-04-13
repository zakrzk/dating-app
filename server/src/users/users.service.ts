// @ts-nocheck
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { createUser, getAllUsersFromDb } from '../app.db';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {
    }

    async createUser(UserDto): Promise<User> {

        const newUser = new User({
            firstName: UserDto.firstName,
            email: UserDto.email,
            passwordHash: UserDto.passwordHash,
            age: UserDto.age,
            gender: UserDto.gender,
            orientation: UserDto.orientation,
            profession: UserDto.profession,
            hobbies: UserDto.hobbies,
            politicalEconomics: UserDto.politicalEconomics,
            politicalDiplomatic: UserDto.politicalDiplomatic,
            politicalCivil: UserDto.politicalCivil,
            politicalSocietal: UserDto.politicalSocietal,
        });

        await createUser(newUser);
        return newUser;

    }

    async getAllUsersFromDb() {
        const copy = await getAllUsersFromDb();
        return copy;
    }

}