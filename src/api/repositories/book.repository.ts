import { Book, BookSchema, BookUpdate } from "../../db/models/book.model";

export class BookRepository {
    
    async findAll(): Promise<Book[]> {
        const books = await Book.findAll<Book>();
        return books;
    }

    async createOne(data: BookSchema): Promise<Book> {
        const book = await Book.create<Book>(data);
        return book;
    }

    async findOne(id:number): Promise<Book | null> {
        const book = await Book.findByPk(id);
        return book;
    }

    async updateOne(old:Book, update:BookUpdate): Promise<Book | null> {
        const saved = await old.set(update);
        return saved;
    }

    async deleteOne(id:number): Promise<boolean> {
        const deletes = await Book.destroy({
            where: {id}
        });
        return !!deletes;
    }
}