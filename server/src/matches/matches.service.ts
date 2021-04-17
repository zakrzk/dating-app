// @ts-nocheck
import {BadRequestException, Injectable} from '@nestjs/common';
import { getMatchesFromDb } from '../app.db';
import {InjectModel} from "@nestjs/mongoose";
import {User} from "../users/user.model";
import {Model} from "mongoose";

@Injectable()
export class MatchesService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) {
  }

  async getMatches(id1, id2) {

    if ((typeof id1) === "string" && (typeof id2) === "string") {
      const copy = await getMatchesFromDb(id1, id2);
      return copy;
    }

    else
      throw new BadRequestException('Invalid data.');

  }

}