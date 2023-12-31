import { NextFunction, Request, Response } from 'express';
import { injectable } from 'tsyringe';

import { Book, BookSchema, BookUpdate } from '../../db/models/book.model';
import { ParamsWithId } from '../../interfaces/ParamWithId';
import { BookService } from '../services/book.service';

@injectable()
export class BookController {
    private bookService: BookService;

    constructor(bookService: BookService){
        this.bookService = bookService;
        this.findAll = this.findAll.bind(this)
        this.createOne = this.createOne.bind(this)
        this.findOne = this.findOne.bind(this)
        this.updateOne = this.updateOne.bind(this)
        this.deleteOne = this.deleteOne.bind(this)
    }

    async findAll(req: Request, res: Response<Book[]>, next: NextFunction) {
      try {
        const books = await this.bookService.findAll();
        res.status(200).json(books);
      } catch (error) {
        next(error);
      }
    }

    async createOne(req: Request<object, Book, BookSchema>, res: Response<Book>, next: NextFunction) {
      try {
        const book = await this.bookService.createOne(req.body);
        res.status(201).json(book);
      } catch (error) {
        next(error);
      }
    }

    async findOne(req: Request<ParamsWithId, Book, object>, res: Response<Book>, next: NextFunction) {
      try {
        if (req.params.id === undefined || Number.isNaN(+req.params.id)) {
          res.status(422)
          throw new Error('Unprocessable Entity, valid id no found');
        }
        const book = await this.bookService.findOne(+req.params.id);
        res.status(200).json(book);
      } catch (error) {
        next(error);
      }
    }

    async updateOne(req: Request<ParamsWithId, Book, BookUpdate>, res: Response<Book>, next: NextFunction) {
      try {
        if (req.params.id === undefined || Number.isNaN(+req.params.id)) {
          res.status(422)
          throw new Error('Unprocessable Entity, valid id no found');
        }
        
        const book = await this.bookService.updateOne(+req.params.id, req.body);
        res.status(200).json(book);
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
        await this.bookService.deleteOne(+req.params.id);
        res.status(204).end();
      } catch (error) {
        next(error);
      }
    }
}