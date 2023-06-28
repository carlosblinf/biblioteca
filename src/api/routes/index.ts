import { Request, Response, Router } from "express";

import MessageResponse from '../../interfaces/MessageResponse';

const router = Router();

router.get('/', (req:Request, res:Response<MessageResponse>)=>{
    res.json({
        message: 'Library api service',
    });
});


export default router;