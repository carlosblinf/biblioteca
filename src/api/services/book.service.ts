import { Book } from "../../db/models/book.model";
import { BookRepository } from "../repositories/book.repository";

export class BookService {
    private bookRepository: BookRepository;

    constructor(){
        this.bookRepository = new BookRepository();
        // this.getBooks = this.getBooks.bind(this)
    }

    async findBooks() {
        const books = await this.bookRepository.findBooks();
        return books;
    }
}