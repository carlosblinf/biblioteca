import { Router } from "express";
import { container } from "tsyringe";

import { ParamsWithId } from "../../interfaces/ParamWithId";
import { QueyWithReaderIdAndBookId } from "../../interfaces/QueyWithReaderIdAndBookId";
import { validateRequest } from "../../middlewares";
import { LendController } from "../controllers/lend.controller";

const router = Router();

const lendController = container.resolve(LendController)

router.get('/', lendController.findAll);
router.get('/:id', validateRequest({params: ParamsWithId}), lendController.findOne);
router.post('/', validateRequest({query: QueyWithReaderIdAndBookId}) ,lendController.makeLend);
router.put('/', validateRequest({query: QueyWithReaderIdAndBookId}) ,lendController.returnBook);

export default router;