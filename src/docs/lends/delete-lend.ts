export default {
  delete: {
    tags: ['Lend CRUD operations'],
    description: 'Deleting a lend',
    operationId: 'deleteLend',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/id',
        },
        required: true,
        description: 'Deleting a done lend',
      },
    ],
    responses: {
      200: {
        description: 'Lend deleted successfully',
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
