import { registerAs } from '@nestjs/config';

export default registerAs('configuration', () => ({
  env: process.env.ENVIRONMENT,
}));
