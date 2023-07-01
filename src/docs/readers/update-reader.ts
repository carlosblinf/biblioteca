export default {
  put: {
    tags: ['Reader CRUD operations'],
    description: 'Update reader',
    operationId: 'updateReader',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/id',
        },
        required: true,
        description: 'Id of reader to be updated',
      },
    ],
    requestBody: {
      content:{
          'application/json': {
              schema:{
                  $ref:'#/components/schemas/Reader'
              }
          }
      }
  },
    responses: {
      200: {
        description: 'Reader updated successfully',
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
