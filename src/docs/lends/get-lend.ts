export default {
    get:{
        tags:['Lend CRUD operations'],
        description: "Get a lend",
        operationId: "getLend",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/id"
                },
                required:true,
                description: "A single lend id"
            }
        ],
        responses:{
            '200':{
                description:"Lend is obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/Lend"
                        }
                    }
                }
            },
            '404':{
                description: "Lend is not found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Error',
                            example:{
                                message:"We can't find the lend",
                                internal_code:"Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}