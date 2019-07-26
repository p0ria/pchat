import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useStaticAssets(join(__dirname, '..', process.env.UPLOAD_LOCATION), {prefix: '/' + process.env.UPLOAD_LOCATION});
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
