export class ConflictError extends Error {
    private code: number;

    constructor(message:string){
        super(message)
        this.code = 409;
    }

    get getCode(){
        return this.code;
    }
}