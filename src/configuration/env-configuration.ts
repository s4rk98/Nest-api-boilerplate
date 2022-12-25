import { registerAs } from '@nestjs/config';

export default registerAs('configuration', () => ({
  env: process.env.ENVIRONMENT,
  port: process.env.PORT,
  host: process.env.HOST,
}));
