export class NotFoundError extends Error {
    private code: number;

    constructor(message:string){
        super(message)
        this.code = 404;
    }

    get getCode(){
        return this.code;
    }
}