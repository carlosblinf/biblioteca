import { NextFunction, Request, Response } from 'express';
import { injectable } from 'tsyringe';

import { Lend, LendUpdate } from '../../db/models/lend.model';
import { NotFoundError } from '../../interfaces/NotFoundError';
import { ParamsWithId } from '../../interfaces/ParamWithId';
import { QueyWithReaderIdAndBookId } from '../../interfaces/QueyWithReaderIdAndBookId';
import { LendService } from '../services/lend.service';

@injectable()
export class LendController {
    private lendService: LendService;

    constructor(lendService: LendService){
        this.lendService = lendService;
        this.findAll = this.findAll.bind(this)
        this.makeLend = this.makeLend.bind(this)
        this.findOne = this.findOne.bind(this)
        this.returnBook = this.returnBook.bind(this)
    }

    async findAll(req: Request, res: Response<Lend[]>, next: NextFunction) {
      try {
        const lends = await this.lendService.findAll();
        res.status(200).json(lends);
      } catch (error) {
        next(error);
      }
    }

    async makeLend(req: Request<object, Lend, LendUpdate>, res: Response<Lend>, next: NextFunction) {
      try {
        if (req.body.readerId === undefined || Number.isNaN(+req.body.readerId) || req.body.bookId === undefined || Number.isNaN(+req.body.bookId)) {
          res.status(422)
          throw new Error('Unprocessable Entity, valid id no found');
        }
        const lend = await this.lendService.makeLend(+req.body.readerId, +req.body.bookId);
        res.status(201).json(lend);
      } catch (error) {
        next(error);
      }
    }

    async findOne(req: Request<ParamsWithId, Lend, object>, res: Response<Lend>, next: NextFunction) {
      try {
        if (req.params.id === undefined || Number.isNaN(+req.params.id)) {
          res.status(422)
          throw new Error('Unprocessable Entity, valid id no found');
        }
        const lend = await this.lendService.findOne(+req.params.id);
        res.status(200).json(lend);
      } catch (error) {
        if (error instanceof NotFoundError) {
          res.status(error.getCode)
        }
        next(error);
      }
    }

    async returnBook(req: Request<object, Lend, LendUpdate, QueyWithReaderIdAndBookId>, res: Response<Lend>, next: NextFunction) {
      try {
        if (req.query.readerId === undefined || Number.isNaN(+req.query.readerId) || req.query.bookId === undefined || Number.isNaN(+req.query.bookId)) {
          res.status(422)
          throw new Error('Unprocessable Entity, valid id no found');
        }
        
        const lend = await this.lendService.returnBook(+req.query.readerId, +req.query.bookId);
        res.status(200).json(lend);
      } catch (error) {
        if (error instanceof NotFoundError) {
          res.status(error.getCode)
        }
        next(error);
      }
    }
}