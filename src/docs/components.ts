
export default {
    components:{
        schemas:{
            id:{
                type:'string',
                description:"An id of a entity(Book, Reader, Lend)",
                example: "1"
            },
            Book:{
                type:'object',
                properties:{
                    id:{
                        type:'number',
                        description:"Book identification number",
                        example:"12"
                    },
                    name:{
                        type:'string',
                        description:"Book's name",
                        example:"Coding in JavaScript"
                    },
                    isbn:{
                        type:"string",
                        description:"The isbn code of the book",
                        example:"978-1-56619-909-4"
                    },
                    available:{
                        type:"boolean",
                        description:"Is the book is lend o available",
                        example:true
                    }
                }
            },
            BookInput:{
                type:'object',
                properties:{
                    name:{
                        type:'string',
                        description:"Book's name",
                        example:"Coding in JavaScript"
                    },
                    isbn:{
                        type:"string",
                        description:"The isbn code of the book",
                        example:"978-1-56619-909-4"
                    },
                }
            },
            BookResponse:{
                type:'object',
                properties:{
                    id:{
                        type:'number',
                        description:"Book identification number",
                        example:"12"
                    },
                    name:{
                        type:'string',
                        description:"Book's name",
                        example:"Coding in JavaScript"
                    },
                    isbn:{
                        type:"string",
                        description:"The isbn code of the book",
                        example:"978-1-56619-909-4"
                    },
                    available:{
                        type:"boolean",
                        description:"Is the book is lend o available",
                        example:true
                    },
                    createdAt:{
                        type:"Date",
                        description:"Date of Created",
                        example:"2023-06-30 20:32:42"
                    },
                    updateAt:{
                        type:"Date",
                        description:"Date of Updated",
                        example:null
                    }
                }
            },
            BookResponseArray:{
                type:'array',
                properties:[{
                    id:{
                        type:'number',
                        description:"Book identification number",
                        example:"1"
                    },
                    name:{
                        type:'string',
                        description:"Book's name",
                        example:"Coding in JavaScript"
                    },
                    isbn:{
                        type:"string",
                        description:"The isbn code of the book",
                        example:"978-1-56619-909-4"
                    },
                    available:{
                        type:"boolean",
                        description:"Is the book is lend o available",
                        example:true
                    },
                    createdAt:{
                        type:"Date",
                        description:"Date of Created",
                        example:"2023-06-30 20:32:42"
                    },
                    updateAt:{
                        type:"Date",
                        description:"Date of Updated",
                        example:null
                    }
                },
                {
                    id:{
                        type:'number',
                        description:"Book identification number",
                        example:"2"
                    },
                    name:{
                        type:'string',
                        description:"Book's name",
                        example:"Learn in Python"
                    },
                    isbn:{
                        type:"string",
                        description:"The isbn code of the book",
                        example:"1-56619-909-3"
                    },
                    available:{
                        type:"boolean",
                        description:"Is the book is lend o available",
                        example:true
                    },
                    createdAt:{
                        type:"Date",
                        description:"Date of Created",
                        example:"2023-06-27 20:32:42"
                    },
                    updateAt:{
                        type:"Date",
                        description:"Date of Updated",
                        example:"2023-06-29 20:32:42"
                    }
                }
            ]
            },
            Reader:{
                type:'object',
                properties:{
                    id:{
                        type:'number',
                        description:"Reader identification number",
                        example:"12"
                    },
                    name:{
                        type:'string',
                        description:"Reader's name",
                        example:"Carlos"
                    },
                }
            },
            ReaderInput:{
                type:'object',
                properties:{
                    name:{
                        type:'string',
                        description:"Reader's name",
                        example:"Carlos"
                    },
                    isbn:{
                        type:"string",
                        description:"The isbn code of the Reader",
                        example:"978-1-56619-909-4"
                    },
                }
            },
            ReaderResponse:{
                type:'object',
                properties:{
                    id:{
                        type:'number',
                        description:"Reader identification number",
                        example:"12"
                    },
                    name:{
                        type:'string',
                        description:"Reader's name",
                        example:"Carlos"
                    },
                    createdAt:{
                        type:"Date",
                        description:"Date of Created",
                        example:"2023-06-30 20:32:42"
                    },
                    updateAt:{
                        type:"Date",
                        description:"Date of Updated",
                        example:null
                    }
                }
            },
            ReaderResponseArray:{
                type:'array',
                properties:[{
                    id:{
                        type:'number',
                        description:"Reader identification number",
                        example:"1"
                    },
                    name:{
                        type:'string',
                        description:"Reader's name",
                        example:"John"
                    },
                    createdAt:{
                        type:"Date",
                        description:"Date of Created",
                        example:"2023-06-30 20:32:42"
                    },
                    updateAt:{
                        type:"Date",
                        description:"Date of Updated",
                        example:null
                    }
                },
                {
                    id:{
                        type:'number',
                        description:"Reader identification number",
                        example:"2"
                    },
                    name:{
                        type:'string',
                        description:"Reader's name",
                        example:"Ernesto"
                    },
                    createdAt:{
                        type:"Date",
                        description:"Date of Created",
                        example:"2023-06-27 20:32:42"
                    },
                    updateAt:{
                        type:"Date",
                        description:"Date of Updated",
                        example:"2023-06-29 20:32:42"
                    }
                }
            ]
            },
            Lend:{
                type:'object',
                properties:{
                    id:{
                        type:'number',
                        description:"Lend identification number",
                        example:"12"
                    },
                    name:{
                        type:'string',
                        description:"Lend's name",
                        example:"Carlos"
                    },
                }
            },
            LendInput:{
                type:'object',
                properties:{
                    name:{
                        type:'string',
                        description:"Lend's name",
                        example:"Carlos"
                    },
                    isbn:{
                        type:"string",
                        description:"The isbn code of the Lend",
                        example:"978-1-56619-909-4"
                    },
                }
            },
            LendResponse:{
                type:'object',
                properties:{
                    id:{
                        type:'number',
                        description:"Lend identification number",
                        example:"12"
                    },
                    name:{
                        type:'string',
                        description:"Lend's name",
                        example:"Carlos"
                    },
                    createdAt:{
                        type:"Date",
                        description:"Date of Created",
                        example:"2023-06-30 20:32:42"
                    },
                    updateAt:{
                        type:"Date",
                        description:"Date of Updated",
                        example:null
                    }
                }
            },
            LendResponseArray:{
                type:'array',
                properties:[{
                    id:{
                        type:'number',
                        description:"Lend identification number",
                        example:"1"
                    },
                    name:{
                        type:'string',
                        description:"Lend's name",
                        example:"John"
                    },
                    createdAt:{
                        type:"Date",
                        description:"Date of Created",
                        example:"2023-06-30 20:32:42"
                    },
                    updateAt:{
                        type:"Date",
                        description:"Date of Updated",
                        example:null
                    }
                },
                {
                    id:{
                        type:'number',
                        description:"Lend identification number",
                        example:"2"
                    },
                    name:{
                        type:'string',
                        description:"Lend's name",
                        example:"Ernesto"
                    },
                    createdAt:{
                        type:"Date",
                        description:"Date of Created",
                        example:"2023-06-27 20:32:42"
                    },
                    updateAt:{
                        type:"Date",
                        description:"Date of Updated",
                        example:"2023-06-29 20:32:42"
                    }
                }
            ]
            },
            Error:{
                type:'object',
                properties:{
                    message:{
                        type:'string'
                    },
                    internal_code:{
                        type:'string'
                    }
                }
            }
        }
    }
}