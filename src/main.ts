import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ GARANTA QUE ESTA LINHA EXISTA E ESTEJA AQUI ✅
  app.enableCors();

  await app.listen(3001);
}
bootstrap();
