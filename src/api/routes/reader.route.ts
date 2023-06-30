import { Router } from "express";

import { ReaderSchema, ReaderUpdate } from "../../db/models/reader.model";
import { ParamsWithId } from "../../interfaces/ParamWithId";
import { validateRequest } from "../../middlewares";
import { ReaderController } from "../controllers/reader.controller";

const router = Router();

const readerController = new ReaderController()

router.get('/', readerController.findAll);
router.get('/:id', validateRequest({params: ParamsWithId}), readerController.findOne);
router.post('/', validateRequest({body: ReaderSchema}) ,readerController.createOne);
router.put('/:id', validateRequest({params: ParamsWithId, body: ReaderUpdate}) ,readerController.updateOne);
router.delete('/:id', validateRequest({params: ParamsWithId}) ,readerController.deleteOne);

export default router;