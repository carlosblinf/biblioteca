import { Request, Response } from "express";

import { BookService } from '../services/book.service';

export class BookController {
    private bookService: BookService;

    constructor(){
        this.bookService = new BookService();
        this.getBooks = this.getBooks.bind(this)
    }

    async getBooks(req: Request, res: Response) {
        const books = await this.bookService.findBooks();
        res.status(200).json({books});
      }
}