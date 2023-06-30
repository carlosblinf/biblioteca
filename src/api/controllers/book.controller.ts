import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

import { Book, BookSchema } from '../../db/models/book.model';
import { BookService } from '../services/book.service';

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

    async createOne(req: Request<object, Book, BookSchema>, res: Response<Book>, next: NextFunction) {
      try {
        const book = await this.bookService.createOne(req.body);
        res.status(201).json(book);
      } catch (error) {
        next(error);
      }
    }
}