import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { CustomLoggerService } from './shared/custom-logger/custom-logger.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const logger = new CustomLoggerService('main');
  app.useLogger(logger); // should be provided, so that the functions from CustomLoggerService can be called.
  const port = configService.get('configuration.port');
  const host = configService.get('configuration.host');
  const env = configService.get('configuration.env');

  // swagger
  const config = new DocumentBuilder()
    .setTitle('DocumentTitle')
    .setDescription('Document description')
    .setVersion('1.0')
    .addTag('Tags')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api-docs', app, document);

  await app.listen(port, host);
  logger.log(`Server spun up at port=${port} with enviroment=${env}`);
}
bootstrap();
