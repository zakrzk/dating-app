// @ts-nocheck
import {BadRequestException, Injectable} from '@nestjs/common';
import {getAllUsersFromDb, getMatchesFromDb, getUserById} from '../app.db';
import {InjectModel} from "@nestjs/mongoose";
import {User} from "../users/user.model";
import {Model} from "mongoose";
import {match} from "assert";

@Injectable()
export class MatchesService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {
    }

    async getMatches(id1) {

        if ((typeof id1) === "string") {

            const loggedUser = await getUserById(id1);     // find User within the database
            let allUsers = await getAllUsersFromDb();
            let matchingUsers = [];
            let wrap = await Promise.all(allUsers.map(async (user, index) => {
                await getMatchesFromDb(loggedUser._id, user._id)
                    .then(matchScore => {
                        // ignore users who are not interested in each other (sexual orientation)
                        // and prevent matching user with its own profile
                        if (matchScore > 0 && loggedUser._id !== user._id) {

                            // do not send any data that is not necessary (such as passwordHash or email)
                            matchingUsers.push({
                                _id: user._id,
                                firstName: user.firstName,
                                profession: user.profession,
                                age: user.age,
                                matchScore: matchScore
                            })
                        }
                    })
            }))
            return matchingUsers;

        } else
            throw new BadRequestException('Invalid data.');

    }

}