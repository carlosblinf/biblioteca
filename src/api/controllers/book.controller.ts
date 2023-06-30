import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

import { Book, BookSchema } from '../../db/models/book.model';
import { NotFoundError } from '../../interfaces/NotFoundError';
import { ParamsWithId } from '../../interfaces/ParamWithId';
import { BookService } from '../services/book.service';

export class BookController {
    private bookService: BookService;

    constructor(){
        this.bookService = new BookService();
        this.findAll = this.findAll.bind(this)
        this.createOne = this.createOne.bind(this)
        this.findOne = this.findOne.bind(this)
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
        if (error instanceof NotFoundError) {
          res.status(error.getCode)
        }
        next(error);
      }
    }
}