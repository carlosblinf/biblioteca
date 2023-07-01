export default {
    get:{
        tags:['Reader CRUD operations'],
        description: "Get a reader",
        operationId: "getReader",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/id"
                },
                required:true,
                description: "A single reader id"
            }
        ],
        responses:{
            '200':{
                description:"Reader is obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/Reader"
                        }
                    }
                }
            },
            '404':{
                description: "Reader is not found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Error',
                            example:{
                                message:"We can't find the reader",
                                internal_code:"Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}