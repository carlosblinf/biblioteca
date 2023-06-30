import { Book } from "../../db/models/book.model";
import { Lend, LendUpdate } from "../../db/models/lend.model";
import { Reader } from "../../db/models/reader.model";

export class LendRepository {
    
    async findAll(): Promise<Lend[]> {
        const lends = await Lend.findAll<Lend>({include: [{ model: Book, as: 'Book' }, { model: Reader, as: 'Reader' }]});
        return lends;
    }

    async makeLend(readerId:number, bookId: number): Promise<Lend> {
        const lend = await Lend.create({bookId, readerId});
        return lend;
    }

    async findOne(id:number): Promise<Lend | null> {
        const lend = await Lend.findByPk(id, {include: [{ model: Book, as: 'Book' }, { model: Reader, as: 'Reader' }]});
        return lend;
    }

    async findOneWere(where:LendUpdate): Promise<Lend | null> {
        const lend = await Lend.findOne({ where });
        return lend;
    }

    async updateOne(old:Lend, update:LendUpdate): Promise<Lend | null> {
        const saved = old.set(update);
        await saved.save()
        return saved;
    }
}