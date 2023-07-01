export default {
    get:{
        tags: ['Lend CRUD operations'],
        description: "Get lends",
        operationId: 'getLends',
        parameters:[],
        responses:{
            '200':{
                description:"Lends were obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/LendResponse',
                        }
                    }
                }
            }
        }
    }
}