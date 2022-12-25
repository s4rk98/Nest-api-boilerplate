import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { CustomLoggerService } from './shared/custom-logger/custom-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const logger = new CustomLoggerService('main');
  const port = configService.get('configuration.port');
  const host = configService.get('configuration.host');
  const env = configService.get('configuration.env');

  await app.listen(port, host);
  logger.log(`Server spun up at port=${port} with enviroment=${env}`);
}
bootstrap();
