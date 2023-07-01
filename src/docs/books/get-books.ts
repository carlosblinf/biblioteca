export default {
    get:{
        tags: ['Book CRUD operations'],
        description: "Get books",
        operationId: 'getBooks',
        parameters:[],
        responses:{
            '200':{
                description:"Books were obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/BookResponse',
                        }
                    }
                }
            }
        }
    }
}