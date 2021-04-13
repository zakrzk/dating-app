import * as request from 'supertest';
import {Test, TestingModule} from '@nestjs/testing';
import { UsersService} from "./users.service";
import {UsersController} from "./users.controller";


describe('Users (e2e)', () => {
    let app: NestFastifyApplication;

    beforeAll(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            imports: [],
            controllers: [UsersController],
            providers: [UsersService]
        }).compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    it(`/users (POST)`, () => {
        return request(app.getHttpServer())
            .post('/users')
            .expect(400)
            .expect('{"statusCode":404,"error":"Not Found","message":"Cannot GET /"}');

    });

    afterAll(async () => {
        await app.close();
    });
});