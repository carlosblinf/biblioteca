import { Router } from "express";
import { container } from "tsyringe";

import { BookSchema, BookUpdate } from "../../db/models/book.model";
import { ParamsWithId } from "../../interfaces/ParamWithId";
import { validateRequest } from "../../middlewares";
import { BookController } from '../controllers/book.controller';

const router = Router();

const bookController = container.resolve(BookController)

router.get('/', bookController.findAll);
router.get('/:id', validateRequest({params: ParamsWithId}), bookController.findOne);
router.post('/', validateRequest({body: BookSchema}) ,bookController.createOne);
router.put('/:id', validateRequest({params: ParamsWithId, body: BookUpdate}) ,bookController.updateOne);
router.delete('/:id', validateRequest({params: ParamsWithId}) ,bookController.deleteOne);

export default router;