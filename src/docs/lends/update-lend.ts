export default {
  put: {
    tags: ['Lend CRUD operations'],
    description: 'Update lend',
    operationId: 'updateLend',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/id',
        },
        required: true,
        description: 'Id of lend to be updated',
      },
    ],
    requestBody: {
      content:{
          'application/json': {
              schema:{
                  $ref:'#/components/schemas/Lend'
              }
          }
      }
  },
    responses: {
      200: {
        description: 'Lend updated successfully',
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
