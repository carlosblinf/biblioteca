
export default {
    post:{
        tags:['Reader CRUD operations'],
        description: "Create reader",
        operationId: "createReader",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/ReaderInput'
                    }
                }
            }
        },
        responses:{
            '201':{
                description: "Reader created successfully",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/ReaderResponse"
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