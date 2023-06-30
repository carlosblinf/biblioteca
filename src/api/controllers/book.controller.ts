import { NextFunction, Request, Response } from 'express';

import { Book, BookSchema } from '../../db/models/book.model';
import { BookService } from '../services/book.service';
import { ZodError } from 'zod';

export class BookController {
    private bookService: BookService;

    constructor(){
        this.bookService = new BookService();
        this.findAll = this.findAll.bind(this)
        this.createOne = this.createOne.bind(this)
    }

    async findAll(req: Request, res: Response<Book[]>, next: NextFunction) {
      try {
        const books = await this.bookService.findAll();
        res.status(200).json(books);
      } catch (error) {
        next(error);
      }
    }

    async createOne(req: Request, res: Response<Book>, next: NextFunction) {
      try {
        const validateData = BookSchema.parse(req.body);
        const book = await this.bookService.createOne(validateData);
        res.status(201).json(book);
      } catch (error) {
        if (error instanceof ZodError) {
          res.status(422);
        }
        next(error);
      }
    }
}