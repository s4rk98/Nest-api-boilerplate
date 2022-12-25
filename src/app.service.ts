import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import configuration from './configuration/env-configuration';
import { CustomLoggerService } from './shared/custom-logger/custom-logger.service';

@Injectable()
export class AppService {
  constructor(
    @Inject(configuration.KEY) private config: ConfigType<typeof configuration>,
    private customLoggerService: CustomLoggerService,
  ) {
    this.customLoggerService.setContext(AppService.name);
  }
  getHello(): string {
    this.customLoggerService.log(`Api logging`);
    return `Helloworld running in ${this.config.env}`;
  }
}
