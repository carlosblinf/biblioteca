import { Router } from "express";

import { BookController } from '../controllers/book.controller';

const router = Router();

const bookController = new BookController()

router.get('/', bookController.findAll);
router.post('/', bookController.createOne);

export default router;