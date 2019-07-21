import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  console.log(dotenv.config());
  console.log(process.env.UPLOAD_LOCATION);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
