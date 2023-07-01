export default {
    get:{
        tags: ['Reader CRUD operations'],
        description: "Get readers",
        operationId: 'getReaders',
        parameters:[],
        responses:{
            '200':{
                description:"Readers were obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/ReaderResponse',
                        }
                    }
                }
            }
        }
    }
}