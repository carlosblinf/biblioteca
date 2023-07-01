export default {
  put: {
    tags: ['Book CRUD operations'],
    description: 'Update book',
    operationId: 'updateBook',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/id',
        },
        required: true,
        description: 'Id of book to be updated',
      },
    ],
    requestBody: {
      content:{
          'application/json': {
              schema:{
                  $ref:'#/components/schemas/Book'
              }
          }
      }
  },
    responses: {
      200: {
        description: 'Book updated successfully',
      },
      404: {
        description: 'Book not found',
      },
      500: {
        description: 'Server error',
      },
    },
  },
};
