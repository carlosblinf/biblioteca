import { ReaderSchema, ReaderUpdate } from "../../db/models/reader.model";
import { ConflictError } from "../../interfaces/ConflictError";
import { NotFoundError } from "../../interfaces/NotFoundError";
import { ReaderRepository } from "../repositories/reader.repository";

export class ReaderService {
    private readerRepository: ReaderRepository;

    constructor(){
        this.readerRepository = new ReaderRepository();
    }

    async findAll() {
        return this.readerRepository.findAll();
    }

    async createOne(data: ReaderSchema) {
        return this.readerRepository.createOne(data);
    }

    async findOne(id:number) {
        console.log("************id****************", id)
        const result = await this.readerRepository.findOne(id);
        if (!result) {
            throw new NotFoundError('Reader not found');
        }
        return result;
    }
    
    async updateOne(id:number, update: ReaderUpdate) {
        const Reader = await this.findOne(id);
        const result = await this.readerRepository.updateOne(Reader, update);
        if (!result) {
            throw new NotFoundError('Reader not updated');
        }
        return result;
    }

    async deleteOne(id:number) {
        const result = await this.readerRepository.deleteOne(id);
        if (!result) {
            throw new ConflictError('Reader not deleted');
        }
        return result;
    }
}