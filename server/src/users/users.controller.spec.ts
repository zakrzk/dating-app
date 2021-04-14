import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {User} from "./user.model";

const testUser1 = {
    firstName: 'John',
    email: 'john@gmail.com',
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
const testUser2 = {
    firstName: 'Monica',
    email: 'monica@gmail.com',
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
const testUser3 = {
    firstName: 'Alex',
    email: 'monica@gmail.com',
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

describe('User Controller', () => {
    let controller: UsersController;
    let service: UsersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [
                {
                    provide: UsersService,
                    useValue: {
                        getOneUser: jest.fn().mockResolvedValue([
                            testUser1
                        ]),
                        getUsers: jest.fn().mockResolvedValue([
                            testUser1,
                            testUser2,
                            testUser3
                        ]),
                        insertOne: jest
                            .fn()
                            .mockImplementation((user: User) =>
                                Promise.resolve({ _id: 'a uuid', ...user }),
                            ),
                        deleteOne: jest.fn().mockResolvedValue({ deleted: true }),

                    },
                },
            ],
        }).compile();

        controller = module.get<UsersController>(UsersController);
        service = module.get<UsersService>(UsersService);
    });

    it('should be defined', async () => {
        expect(controller).toBeDefined();
    });

    describe('getOneUser', () => {
        it('should get an array with one user', () => {
            expect(controller.getUsers()).resolves.toContain(testUser1);
        });
    });
    describe('getUsers', () => {
        it('should get an array of users', () => {
            expect(controller.getUsers()).resolves.toStrictEqual([testUser1, testUser2, testUser3]);
        });
    });

});
