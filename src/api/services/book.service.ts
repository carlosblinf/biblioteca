import { BookSchema } from "../../db/models/book.model";
import { BookRepository } from "../repositories/book.repository";

export class BookService {
    private bookRepository: BookRepository;

    constructor(){
        this.bookRepository = new BookRepository();
    }

    async findAll() {
        return this.bookRepository.findAll();
    }

    async createOne(data: BookSchema) {
        return this.bookRepository.createOne(data);
    }
}