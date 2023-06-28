import { Router } from "express";
import MessageResponse from '../../interfaces/MessageResponse';

const router = Router();

router.get<{}, MessageResponse>('/', (req, res)=>{
    res.json({
        message: 'Libary api service',
    });
});


export default router;