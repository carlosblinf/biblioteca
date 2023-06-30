import { Book } from "../../db/models/book.model";

export class BookRepository {
    
    async findAll(): Promise<Book[]> {
        const books = await Book.findAll<Book>();
        return books;
    }
}