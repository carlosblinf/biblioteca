export default {
  delete: {
    tags: ['Book CRUD operations'],
    description: 'Deleting a book',
    operationId: 'deleteBook',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/id',
        },
        required: true,
        description: 'Deleting a done book',
      },
    ],
    responses: {
      200: {
        description: 'Book deleted successfully',
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
