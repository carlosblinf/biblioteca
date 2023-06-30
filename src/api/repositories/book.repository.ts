import { Book } from "../../db/models/book.model";

export class BookRepository {
    
    async findBooks(): Promise<Book[]> {
        const books = await Book.findAll<Book>();
        return books;
    }
}