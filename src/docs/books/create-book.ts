
export default {
    post:{
        tags:['Book CRUD operations'],
        description: "Create book",
        operationId: "createBook",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/BookInput'
                    }
                }
            }
        },
        responses:{
            '201':{
                description: "Book created successfully",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/BookResponse"
                        }
                    }
                }
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}