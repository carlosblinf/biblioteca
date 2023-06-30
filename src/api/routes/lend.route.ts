import { Router } from "express";

import { ParamsWithId } from "../../interfaces/ParamWithId";
import { QueyWithReaderIdAndBookId } from "../../interfaces/QueyWithReaderIdAndBookId";
import { validateRequest } from "../../middlewares";
import { LendController } from "../controllers/lend.controller";

const router = Router();

const lendController = new LendController()

router.get('/', lendController.findAll);
router.get('/:id', validateRequest({params: ParamsWithId}), lendController.findOne);
router.post('/', validateRequest({query: QueyWithReaderIdAndBookId}) ,lendController.makeLend);
router.put('/', validateRequest({query: QueyWithReaderIdAndBookId}) ,lendController.returnBook);

export default router;