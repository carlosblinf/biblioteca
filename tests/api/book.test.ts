import request from 'supertest';

import app from '../../src/app'
import { sequelizeConnection } from '../../src/db';
import { Book } from '../../src/db/models/book.model';

beforeAll(async () => {
    await sequelizeConnection.sync({force: true});
    await Book.create({name: "vivo", isbn:"vivo123", lend: false});
    await Book.create({name: "vivo1", isbn:"vivo12345", lend: false});
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
        expect(response.body).toHaveProperty('books');
        expect(response.body.books).toHaveProperty('length');
        expect(response.body.books.length).toEqual(2);
      });
  });
});
