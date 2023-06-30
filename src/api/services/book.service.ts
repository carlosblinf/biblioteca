import { Book } from "../../db/models/book.model";
import { BookRepository } from "../repositories/book.repository";

export class BookService {
    private bookRepository: BookRepository;

    constructor(){
        this.bookRepository = new BookRepository();
    }

    async findAll() {
        const books = await this.bookRepository.findAll();
        return books;
    }
}