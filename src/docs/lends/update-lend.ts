export default {
  put: {
    tags: ['Lend CRUD operations'],
    description: 'Return a book lend',
    operationId: 'updateLend',
    parameters: [
      {
        name: 'bookId',
        in: 'query',
        schema: {
          $ref: '#/components/schemas/bookId',
        },
        required: true,
        description: 'Book foreign key id to return',
      },
      {
        name: 'readerId',
        in: 'query',
        schema: {
          $ref: '#/components/schemas/readerId',
        },
        required: true,
        description: 'Reader foreign key id',
      },
    ],
    responses: {
      200: {
        description: 'Book lend return successfully',
        content:{
          'application/json': {
              schema:{
                  $ref:'#/components/schemas/LendBookReturn'
              }
          }
      }
      },
      404: {
        description: 'Lend not found',
      },
      500: {
        description: 'Server error',
      },
    },
  },
};
