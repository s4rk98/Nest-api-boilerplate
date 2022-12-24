import * as Joi from 'joi';
import { SYS_K } from 'src/shared';

export default Joi.object({
  ENVIRONMENT: Joi.string()
    .valid(SYS_K.ENV_TYPES.DEV, SYS_K.ENV_TYPES.STG, SYS_K.ENV_TYPES.PRD)
    .default(SYS_K.ENV_TYPES.DEV),
});
