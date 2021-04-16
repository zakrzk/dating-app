import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cors = require('cors')
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors()) // using CORS module allows me to accept incoming requests
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3006);
}
bootstrap();
