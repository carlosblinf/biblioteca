import * as z from 'zod';

const QueyWithReaderIdAndBookId = z.object({
    readerId: z.string().min(1).optional(),
    bookId: z.string().min(1).optional(),
  });
  
  type QueyWithReaderIdAndBookId = z.infer<typeof QueyWithReaderIdAndBookId>;

  export {QueyWithReaderIdAndBookId};