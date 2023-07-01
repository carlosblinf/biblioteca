export default {
  delete: {
    tags: ['Reader CRUD operations'],
    description: 'Deleting a reader',
    operationId: 'deleteReader',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/id',
        },
        required: true,
        description: 'Deleting a done reader',
      },
    ],
    responses: {
      200: {
        description: 'Reader deleted successfully',
      },
      404: {
        description: 'Reader not found',
      },
      500: {
        description: 'Server error',
      },
    },
  },
};
