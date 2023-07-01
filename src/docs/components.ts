
export default {
    components:{
        schemas:{
            id:{
                type:'string',
                description:"An id of a entity(Book, Reader, Lend)",
                example: "1"
            },
            bookId:{
                type:'number',
                description:"Book foreign key id",
                example: 1
            },
            readerId:{
                type:'number',
                description:"Reader foreign key id",
                example: 1
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
                        example: 12
                    },
                    bookId:{
                        type:'number',
                        description:"Book foreign key id",
                        example: 1
                    },
                    readerId:{
                        type:'string',
                        description:"Reader foreign key id",
                        example: 1
                    },
                    dateReturn:{
                        type:'Date',
                        description:"Date to return the book lend",
                        example: null
                    },
                }
            },
            LendInput:{
                type:'object',
                properties:{
                    bookId:{
                        type:'number',
                        description:"Book foreign key id",
                        example: 1
                    },
                    readerId:{
                        type:'number',
                        description:"Reader foreign key id",
                        example: 1
                    },
                }
            },
            LendResponse:{
                type:'object',
                properties:{
                    id:{
                        type:'number',
                        description:"Lend identification number",
                        example: 1
                    },
                    bookId:{
                        type:'number',
                        description:"Book foreign key id",
                        example: 1
                    },
                    readerId:{
                        type:'number',
                        description:"Reader foreign key id",
                        example: 1
                    },
                    dateReturn:{
                        type:'Date',
                        description:"Date to return the book lend",
                        example: null
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
            LendBookReturn:{
                type:'object',
                properties:{
                    id:{
                        type:'number',
                        description:"Lend identification number",
                        example: 1
                    },
                    bookId:{
                        type:'number',
                        description:"Book foreign key id",
                        example: 1
                    },
                    readerId:{
                        type:'number',
                        description:"Reader foreign key id",
                        example: 1
                    },
                    dateReturn:{
                        type:'Date',
                        description:"Date to return the book lend",
                        example: "2023-07-01 05:32:42"
                    },
                    createdAt:{
                        type:"Date",
                        description:"Date of Created",
                        example:"2023-06-30 20:32:42"
                    },
                    updateAt:{
                        type:"Date",
                        description:"Date of Updated",
                        example:"2023-07-01 05:32:42"
                    }
                }
            },
            LendResponseArray:{
                type:'array',
                properties:[{
                    id:{
                        type:'number',
                        description:"Lend identification number",
                        example: 12
                    },
                    bookId:{
                        type:'number',
                        description:"Book foreign key id",
                        example: 1
                    },
                    readerId:{
                        type:'number',
                        description:"Reader foreign key id",
                        example: 1
                    },
                    dateReturn:{
                        type:'Date',
                        description:"Date to return the book lend",
                        example: "2023-07-01 05:32:42"
                    },
                    createdAt:{
                        type:"Date",
                        description:"Date of Created",
                        example:"2023-06-30 20:32:42"
                    },
                    updateAt:{
                        type:"Date",
                        description:"Date of Updated",
                        example:"2023-07-01 05:32:42"
                    }
                },
                {
                    id:{
                        type:'number',
                        description:"Lend identification number",
                        example: 12
                    },
                    bookId:{
                        type:'number',
                        description:"Book foreign key id",
                        example: 1
                    },
                    readerId:{
                        type:'number',
                        description:"Reader foreign key id",
                        example: 1
                    },
                    dateReturn:{
                        type:'Date',
                        description:"Date to return the book lend",
                        example: null
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