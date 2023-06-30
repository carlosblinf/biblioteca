import * as z from 'zod';

const ParamsWithId = z.object({
    id: z.string().min(1).optional(),
  });
  
  type ParamsWithId = z.infer<typeof ParamsWithId>;

  export {ParamsWithId};