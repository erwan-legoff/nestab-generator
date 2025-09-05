import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const originsEnv = configService.get<string>('CORS_ORIGINS') ?? 'http://localhost:4200,http://127.0.0.1:4200';
  const origins = originsEnv.split(',').map(s => s.trim()).filter(Boolean);

  app.enableCors({
    origin: origins,
  });

  const port = Number(configService.get<number>('PORT')) || 3000;
  await app.listen(port);
}

bootstrap();
