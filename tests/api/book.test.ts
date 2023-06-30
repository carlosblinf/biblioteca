import request from 'supertest';

import app from '../../src/app'
import { sequelizeConnection } from '../../src/db';
import { Book } from '../../src/db/models/book.model';

beforeAll(async () => {
    await sequelizeConnection.sync({force: true});
    await Book.create({name: "Learn React", isbn:"305-598-21508-8", lend: false});
    await Book.create({name: "The Truth", isbn:"443-598-21508-8", lend: false});
  });
  
  afterAll(async () => {
    await sequelizeConnection.close();
  });

describe('GET /api/books', () => {
  it('responds with an array of books', async () => {
    await request(app)
      .get('/api/books')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('length');
        expect(response.body.length).toEqual(2);
      });
  });
});

describe('POST /api/books', () => {
  it('responds with an inserted object', async () =>
    request(app)
      .post('/api/books')
      .set('Accept', 'application/json')
      .send({name: "Learn TypeScript", isbn:"3-598-21508-8", lend: false})
      .expect('Content-Type', /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name');
        expect(response.body.content).toBe('Learn TypeScript');
        expect(response.body).toHaveProperty('isbn');
        expect(response.body).toHaveProperty('lend');
      }),
  );
});
