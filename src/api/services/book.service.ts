import { Book, BookInput } from "../../db/models/book.model";
import { BookRepository } from "../repositories/book.repository";

export class BookService {
    private bookRepository: BookRepository;

    constructor(){
        this.bookRepository = new BookRepository();
    }

    async findAll() {
        return this.bookRepository.findAll();
    }

    async createOne(data: BookInput) {
        return this.bookRepository.createOne(data);
    }
}