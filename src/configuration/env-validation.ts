import * as Joi from 'joi';
import { SYS_K } from 'src/shared/constants';

export default Joi.object({
  ENVIRONMENT: Joi.string()
    .valid(SYS_K.ENV_TYPES.DEV, SYS_K.ENV_TYPES.STG, SYS_K.ENV_TYPES.PRD)
    .default(SYS_K.ENV_TYPES.DEV),
  PORT: Joi.number().default(SYS_K.DEF_PORT),
  HOST: Joi.string().default(SYS_K.DEF_HOST),
});
