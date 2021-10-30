import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const PORT = process.env.PORT || 8080;

  app.useStaticAssets(join(__dirname, '..', 'public/static'));
  app.setBaseViewsDir(join(__dirname, '..', 'public/views'));
  app.setViewEngine('hbs');

  await app.listen(PORT, () => {
    console.log(`Server started on ${PORT} port`);
  });
}
bootstrap();
