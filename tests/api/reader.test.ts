import request from 'supertest';

import app from '../../src/app'
import { sequelizeConnection } from '../../src/db';
import { Reader } from '../../src/db/models/reader.model';

beforeAll(async () => {
    await sequelizeConnection.sync({force: true}).catch((err)=>console.log("bad DB connection", err));
    await Reader.create({name: "John W"});
    await Reader.create({name: "Carlos"});
  });
  
  afterAll(async () => {
    await sequelizeConnection.close();
  });

describe('GET /api/readers', () => {
  it('responds with an array of readers', async () => {
    await request(app)
      .get('/api/readers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('length');
        expect(response.body.length).toEqual(2);
      });
  });
});

let id: number;
describe('POST /api/readers', () => {
  it('responds with an inserted object', async () =>
    request(app)
      .post('/api/readers')
      .set('Accept', 'application/json')
      .send({name: "Marcos"})
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        id = response.body.id;
        expect(response.body).toHaveProperty('name');
        expect(response.body.name).toBe('Marcos');
      }),
  );
  it('responds with an error if the reader is invalid', async () =>
    request(app)
      .post('/api/readers')
      .set('Accept', 'application/json')
      .send({
        name: '',
      })
      .expect('Content-Type', /json/)
      .expect(422)
  );
});

describe('GET /api/readers/:id', () => {
  it('responds with a single reader', async () =>
    request(app)
      .get(`/api/readers/${id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toBe(id);
        expect(response.body).toHaveProperty('name');
        expect(response.body.name).toBe('Marcos');
      }),
  );
  it('responds with an invalid ObjectId error', async () => {
      await request(app)
        .get('/api/readers/asdsadsad')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(422);
    });
    it('responds with a not found error', async () => {
      await request(app)
        .get('/api/readers/123456')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404);
    });
});

describe('PUT /api/readers/:id', () => {
  it('responds with an invalid ObjectId error', async () => {
    await request(app)
      .put('/api/readers/adsfadsfasdfasdf')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422);
  });
  it('responds with a not found error', async () => {
    await request(app)
      .put('/api/readers/12323')
      .set('Accept', 'application/json')
      .send({name: "Marcos"})
      .expect('Content-Type', /json/)
      .expect(404);
  });
  it('responds with a single reader', async () =>
    request(app)
      .put(`/api/readers/${id}`)
      .set('Accept', 'application/json')
      .send({name: "Marcos"})
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toBe(id);
        expect(response.body).toHaveProperty('name');
        expect(response.body.name).toBe('Marcos');
      }),
  );
});

describe('DELETE /api/readers/:id', () => {
  it('responds with an invalid ObjectId error', async () => {
    await request(app)
      .delete('/api/readers/adsfadsfasdfasdf')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422);
  });
  it('responds with a not conflict error', async () => {
    await request(app)
      .delete('/api/readers/12323')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(409);
  });
  it('responds with a 204 status code', async () => {
    await request(app)
      .delete(`/api/readers/${id}`)
      .expect(204);
  });
  it('responds with a not found error', async () => {
    await request(app)
      .get(`/api/readers/${id}`)
      .set('Accept', 'application/json')
      .expect(404);
  });
});
