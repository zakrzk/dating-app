import { createMock } from '@golevelup/nestjs-testing';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UserDto } from './user.dto';
import { UsersService } from './users.service';
import { User } from './user.model';

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
    firstName: 'John',
    email: 'johsn@gmail.com',
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
    politicalEconomics: 3,
    politicalDiplomatic: -3,
    politicalCivil: 3,
    politicalSocietal: 5
};
const testUser3 = {
    firstName: 'John',
    email: 'johssdan@gmail.com',
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
    politicalEconomics: 3,
    politicalDiplomatic: -3,
    politicalCivil: 3,
    politicalSocietal: 5
};

const testBreed1 = 'Test Breed 1';

describe('User Controller', () => {
    let controller: UsersController;
    let service: UsersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            // If you've looked at the complex sample you'll notice that these functions
            // are a little bit more in depth using mock implementation
            // to give us a little bit more control and flexibility in our tests
            // this is not necessary, but can sometimes be helpful in a test scenario
            providers: [
                {
                    provide: UsersService,
                    useValue: {
                        insertOne: jest
                            .fn()
                            .mockImplementation((user: UserDto) =>
                                Promise.resolve({ _id: 'a uuid', ...user }),
                            ),
                    },
                },
            ],
        }).compile();

        controller = module.get<UsersController>(UsersController);
        service = module.get<UsersService>(UsersService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    // describe.skip('getCats', () => {
    //     it('should get an array of cats', () => {
    //         expect(controller.getCats()).resolves.toEqual([
    //             {
    //                 name: testUser1,
    //                 breed: testBreed1,
    //                 age: 4,
    //             },
    //             {
    //                 name: 'Test Cat 2',
    //                 breed: 'Test Breed 2',
    //                 age: 3,
    //             },
    //             {
    //                 name: 'Test Cat 3',
    //                 breed: 'Test Breed 3',
    //                 age: 2,
    //             },
    //         ]);
    //     });
    // });
    // describe.skip('getById', () => {
    //     it('should get a single cat', () => {
    //         expect(controller.getById('a strange id')).resolves.toEqual({
    //             name: testUser1,
    //             breed: testBreed1,
    //             age: 4,
    //             _id: 'a strange id',
    //         });
    //         expect(controller.getById('a different id')).resolves.toEqual({
    //             name: testUser1,
    //             breed: testBreed1,
    //             age: 4,
    //             _id: 'a different id',
    //         });
    //     });
    // });
    // describe.skip('getByName', () => {
    //     it('should get a cat back', async () => {
    //         await expect(controller.getByName('Ventus')).resolves.toEqual({
    //             name: 'Ventus',
    //             breed: testBreed1,
    //             age: 4,
    //         });
    //         // using the really cool @golevelup/nestjs-testing module's utility function here
    //         // otherwise we need to pass `as any` or we need to mock all 54+ attributes of Document
    //         const aquaMock = createMock<User>({
    //             name: 'Aqua',
    //             breed: 'Maine Coon',
    //             age: 5,
    //         });
    //         const getByNameSpy = jest
    //             .spyOn(service, 'getOneByName')
    //             .mockResolvedValueOnce(aquaMock);
    //         const getResponse = await controller.getByName('Aqua');
    //         expect(getResponse).toEqual(aquaMock);
    //         expect(getByNameSpy).toBeCalledWith('Aqua');
    //     });
    // });
    describe('newCat', () => {
        it('should create a new cat', () => {
            const newUserDTO: UserDto = {
                name: 'John',
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
            }
            expect(controller.createUser(
                testUser1,
                newUserDTO.name,
                newUserDTO.email,
                newUserDTO.passwordHash,
                newUserDTO.age,
                newUserDTO.gender,
                newUserDTO.orientation,
                newUserDTO.profession,
                newUserDTO.hobbies,
                newUserDTO.politicalEconomics,
                newUserDTO.politicalDiplomatic,
                newUserDTO.politicalCivil,
                newUserDTO.politicalSocietal,
            )).resolves.toEqual({
                _id: 'a uuid',
                ...newUserDTO,
            });
        });
    });
    // describe.skip('updateCat', () => {
    //     it('should update a new cat', () => {
    //         const newCatDTO: UserDto = {
    //             name: 'New Cat 1',
    //             breed: 'New Breed 1',
    //             age: 4,
    //         };
    //         expect(controller.updateCat(newCatDTO)).resolves.toEqual({
    //             _id: 'a uuid',
    //             ...newCatDTO,
    //         });
    //     });
    // });
    // describe.skip('deleteCat', () => {
    //     it('should return that it deleted a cat', () => {
    //         expect(controller.deleteCat('a uuid that exists')).resolves.toEqual({
    //             deleted: true,
    //         });
    //     });
    //     it('should return that it did not delete a cat', () => {
    //         const deleteSpy = jest
    //             .spyOn(service, 'deleteOne')
    //             .mockResolvedValueOnce({ deleted: false });
    //         expect(
    //             controller.deleteCat('a uuid that does not exist'),
    //         ).resolves.toEqual({ deleted: false });
    //         expect(deleteSpy).toBeCalledWith('a uuid that does not exist');
    //     });
    // });
});
