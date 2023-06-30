import { NextFunction, Request, Response } from 'express';
import { injectable } from 'tsyringe';

import { Reader, ReaderSchema, ReaderUpdate } from '../../db/models/reader.model';
import { ParamsWithId } from '../../interfaces/ParamWithId';
import { ReaderService } from '../services/reader.service';

@injectable()
export class ReaderController {
    private readerService: ReaderService;

    constructor(readerService: ReaderService){
        this.readerService = readerService;
        this.findAll = this.findAll.bind(this)
        this.createOne = this.createOne.bind(this)
        this.findOne = this.findOne.bind(this)
        this.updateOne = this.updateOne.bind(this)
        this.deleteOne = this.deleteOne.bind(this)
    }

    async findAll(req: Request, res: Response<Reader[]>, next: NextFunction) {
      try {
        const readers = await this.readerService.findAll();
        res.status(200).json(readers);
      } catch (error) {
        next(error);
      }
    }

    async createOne(req: Request<object, Reader, ReaderSchema>, res: Response<Reader>, next: NextFunction) {
      try {
        const reader = await this.readerService.createOne(req.body);
        res.status(201).json(reader);
      } catch (error) {
        next(error);
      }
    }

    async findOne(req: Request<ParamsWithId, Reader, object>, res: Response<Reader>, next: NextFunction) {
      try {
        if (req.params.id === undefined || Number.isNaN(+req.params.id)) {
          res.status(422)
          throw new Error('Unprocessable Entity, valid id no found');
        }
        const reader = await this.readerService.findOne(+req.params.id);
        res.status(200).json(reader);
      } catch (error) {
        next(error);
      }
    }

    async updateOne(req: Request<ParamsWithId, Reader, ReaderUpdate>, res: Response<Reader>, next: NextFunction) {
      try {
        if (req.params.id === undefined || Number.isNaN(+req.params.id)) {
          res.status(422)
          throw new Error('Unprocessable Entity, valid id no found');
        }
        
        const reader = await this.readerService.updateOne(+req.params.id, req.body);
        res.status(200).json(reader);
      } catch (error) {
        next(error);
      }
    }

    async deleteOne(req: Request<ParamsWithId, object, object>, res: Response, next: NextFunction) {
      try {
        if (req.params.id === undefined || Number.isNaN(+req.params.id)) {
          res.status(422)
          throw new Error('Unprocessable Entity, valid id no found');
        }
        await this.readerService.deleteOne(+req.params.id);
        res.status(204).end();
      } catch (error) {
        next(error);
      }
    }
}