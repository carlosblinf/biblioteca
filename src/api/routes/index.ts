import { Request, Response, Router } from "express";

import {MessageResponse} from '../../interfaces/MessageResponse';
import books from './book.route'
import lends from './lend.route'
import readers from './reader.route'

const router = Router();

router.get('/', (req:Request, res:Response<MessageResponse>)=>{
    res.json({
        message: 'Library api service',
    });
});

router.use('/books', books);
router.use('/readers', readers);
router.use('/lends', lends);

export default router;