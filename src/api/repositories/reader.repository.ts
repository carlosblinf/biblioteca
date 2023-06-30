import { Reader, ReaderSchema, ReaderUpdate } from "../../db/models/reader.model";

export class ReaderRepository {
    
    async findAll(): Promise<Reader[]> {
        const readers = await Reader.findAll<Reader>();
        return readers;
    }

    async createOne(data: ReaderSchema): Promise<Reader> {
        const reader = await Reader.create<Reader>(data);
        return reader;
    }

    async findOne(id:number): Promise<Reader | null> {
        const reader = await Reader.findByPk(id);
        return reader;
    }

    async updateOne(old:Reader, update:ReaderUpdate): Promise<Reader | null> {
        const saved = await old.set(update);
        return saved;
    }

    async deleteOne(id:number): Promise<boolean> {
        const deletes = await Reader.destroy({
            where: {id}
        });
        return !!deletes;
    }
}