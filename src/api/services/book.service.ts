import { BookSchema, BookUpdate } from "../../db/models/book.model";
import { NotFoundError } from "../../interfaces/NotFoundError";
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

    async findOne(id:number) {
        const result = await this.bookRepository.findOne(id);
        if (!result) {
            throw new NotFoundError('Book not found');
        }
        return result;
    }
    
    async updateOne(id:number, update: BookUpdate) {
        const book = await this.findOne(id);
        const result = await this.bookRepository.updateOne(book, update);
        if (!result) {
            throw new NotFoundError('Book not updated');
        }
        return result;
    }
}