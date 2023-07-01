
export default {
    post:{
        tags:['Lend CRUD operations'],
        description: "Make a lend",
        operationId: "createLend",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/LendInput'
                    }
                }
            }
        },
        responses:{
            '201':{
                description: "Lend created successfully",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/LendResponse"
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