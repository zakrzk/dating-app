import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cors = require('cors')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors()) // using CORS module allows me to accept incoming requests
  await app.listen (3008);
}
bootstrap();
