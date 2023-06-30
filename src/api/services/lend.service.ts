import { ConflictError } from "../../interfaces/ConflictError";
import { NotFoundError } from "../../interfaces/NotFoundError";
import { LendRepository } from "../repositories/lend.repository";
import { BookService } from "./book.service";
import { ReaderService } from "./reader.service";

export class LendService {
    private lendRepository: LendRepository;

    private bookService: BookService;

    private readerService: ReaderService;

    constructor(){
        this.lendRepository = new LendRepository();
        this.bookService = new BookService();
        this.readerService = new ReaderService();
    }

    async findAll() {
        return this.lendRepository.findAll();
    }

    async makeLend(readerId:number, bookId: number) {
        const book = await this.bookService.findOne(bookId);
        if (!book.dataValues.available) {
            throw new ConflictError("Book no available");
        }
        const reader = await this.readerService.findOne(readerId);
        if (reader.dataValues.id === undefined || book.dataValues.id === undefined) {
            throw new ConflictError("The book cannot be lent");
        }
        const lend = await this.lendRepository.makeLend(reader.dataValues.id, book.dataValues.id);
        await (await book.update({available:false})).save();

        return lend;
    }

    async findOne(id:number) {
        const result = await this.lendRepository.findOne(id);
        if (!result) {
            throw new NotFoundError('Lend not found');
        }
        return result;
    }
    
    async returnBook(readerId:number, bookId: number) {
        const lend = await this.lendRepository.findOneWere({ readerId,bookId });
        if (!lend || lend.dataValues.dateReturn !== null) {
            throw new NotFoundError('Loan not found or Book is available');
        }
        const book = await this.bookService.updateOne(bookId, {available:true});
        if (!book) {
            throw new NotFoundError('Loan not found or Book is available');
        }
        const result = await this.lendRepository.updateOne(lend, {dateReturn: new Date()});
        if (!result) {
            throw new NotFoundError('Loan not found or Book is available');
        }
        return result;
    }
}