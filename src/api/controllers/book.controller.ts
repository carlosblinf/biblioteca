import { NextFunction, Request, Response } from 'express';

import { Book } from '../../db/models/book.model';
import { BookService } from '../services/book.service';

export class BookController {
    private bookService: BookService;

    constructor(){
        this.bookService = new BookService();
        this.findAll = this.findAll.bind(this)
    }

    async findAll(req: Request, res: Response<Book[]>, next: NextFunction) {
      try {
        const books = await this.bookService.findAll();
        res.status(200).json(books);
      } catch (error) {
        next(error);
      }
    }
}