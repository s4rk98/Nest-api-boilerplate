import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class CustomLoggerService extends ConsoleLogger {
  constructor(context: string) {
    super(context);
  }
}
