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

    async createUser(
        name: string,
        email: string,
        passwordHash: string,
        age: number,
        gender: string,
        orientation: string[],
        profession: string,
        hobbies: string[],
        politicalEconomics: number,
        politicalDiplomatic: number,
        politicalCivil: number,
        politicalSocietal: number,
    ): Promise<User> {

        const newUser = new User({
            name: name,
            email: email,
            passwordHash: passwordHash,
            age: age,
            gender: gender,
            orientation: orientation,
            profession: profession,
            hobbies: hobbies,
            politicalEconomics: politicalEconomics,
            politicalDiplomatic: politicalDiplomatic,
            politicalCivil: politicalCivil,
            politicalSocietal: politicalSocietal,
        });

        await createUser(newUser);
        return newUser;

    }

    async getAllUsersFromDb() {
        const copy = await getAllUsersFromDb();
        return copy;
    }

}