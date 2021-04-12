// @ts-nocheck
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
jest.mock('./users.service.ts'); // your path to service

import {Test} from "@nestjs/testing";
import {BadRequestException} from "@nestjs/common";

describe('UsersController', () => {
    let usersController: UsersController;
    let usersService: UsersService;

    beforeEach(async () => {

        const moduleRef = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [UsersService]
        }).compile();

        usersService = moduleRef.get<UsersService>(UsersService)
        usersController = moduleRef.get<UsersController>(UsersController)
    });

    describe('createUser', () => {
        it('should return an error', async () => {
            const testUser = {
                name: 'dsdsdsa',
                email: 'invalid email address@@@',
                passwordHash: 'hashedPass',
                age: 21,
                gender: 'demiboy',
                orientation: [
                    'female',
                    'male',
                    'bigender'
                ],
                profession: 'doctor',
                hobbies: [
                    'soccer',
                    'handball',
                    'chess',
                    'math',
                    'music',
                    'forestry',
                    'design',
                    'dyi',
                    'mexican',
                    'shrimps',
                ],
                politicalEconomics: 0,
                politicalDiplomatic: -3,
                politicalCivil: 3,
                politicalSocietal: 5
            };

            jest.spyOn(usersService, 'createUser').mockImplementation(() => testUser);

            expect.assertions(1);
            const data = await usersController.createUser(testUser);
            expect(data).toEqual({testUser});

            // expect(await usersController.createUser(testUser)).toBe({test : 2});
        });
    });
});