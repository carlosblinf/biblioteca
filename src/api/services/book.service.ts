
import { injectable } from 'tsyringe';

import { BookSchema, BookUpdate } from "../../db/models/book.model";
import { ConflictError } from "../../interfaces/ConflictError";
import { NotFoundError } from "../../interfaces/NotFoundError";
import { BookRepository } from "../repositories/book.repository";

@injectable()
export class BookService {
    private bookRepository: BookRepository;

    constructor(bookRepository: BookRepository){
        this.bookRepository = bookRepository;
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

    async deleteOne(id:number) {
        const result = await this.bookRepository.deleteOne(id);
        if (!result) {
            throw new ConflictError('Book not deleted');
        }
        return result;
    }
}