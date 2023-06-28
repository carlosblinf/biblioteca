import request from 'supertest';

import app from '../src/app';

describe('GET /api', () => {
  it('should return 200 OK', async () => {
    request(app)
    .get('/api')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .then((response)=>{
      expect(response.statusCode).toEqual(200);
    })
  });

  it('responds with json message like Libary api service', async () => {
    request(app)
      .get('/api')
      .then((response) => {
        expect(response.body).toEqual({message:'Libary api service'});
      });
  });
});

describe('GET /unexist-route', () => {
  it('responds with not found message, should .return 404 Error', async () => {
    await request(app)
    .get('/unexist-route')
    .expect(404);
  });
});
