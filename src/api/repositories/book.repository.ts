import { Book, BookInput } from "../../db/models/book.model";

export class BookRepository {
    
    async findAll(): Promise<Book[]> {
        const books = await Book.findAll<Book>();
        return books;
    }

    async createOne(data: BookInput): Promise<Book> {
        const book = await Book.create<Book>(data);
        return book;
    }
}