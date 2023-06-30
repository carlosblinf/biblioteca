import { Book, BookSchema } from "../../db/models/book.model";

export class BookRepository {
    
    async findAll(): Promise<Book[]> {
        const books = await Book.findAll<Book>();
        return books;
    }

    async createOne(data: BookSchema): Promise<Book> {
        const book = await Book.create<Book>(data);
        return book;
    }
}