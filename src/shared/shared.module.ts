import { Module } from '@nestjs/common';
import { CustomLoggerModule } from './custom-logger/custom-logger.module';

@Module({
  imports: [CustomLoggerModule],
  exports: [CustomLoggerModule],
})
export class SharedModule {}
