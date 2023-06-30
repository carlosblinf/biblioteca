import request from 'supertest';

import app from '../../src/app'
import { sequelizeConnection } from '../../src/db';
import { Book } from '../../src/db/models/book.model';

beforeAll(async () => {
    await sequelizeConnection.sync({force: true}).catch((err)=>console.log("bad DB connection", err));
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

let id: number;
describe('POST /api/books', () => {
  it('responds with an inserted object', async () =>
    request(app)
      .post('/api/books')
      .set('Accept', 'application/json')
      .send({name: "Learn TypeScript", isbn:"3-598-21508-8", lend: false})
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        id = response.body.id;
        expect(response.body).toHaveProperty('name');
        expect(response.body.name).toBe('Learn TypeScript');
        expect(response.body).toHaveProperty('isbn');
        expect(response.body).toHaveProperty('lend');
      }),
  );
  it('responds with an error if the book is invalid', async () =>
    request(app)
      .post('/api/books')
      .set('Accept', 'application/json')
      .send({
        name: '',
        isbn:'3-598-21508-8'
      })
      .expect('Content-Type', /json/)
      .expect(422)
      .then((response) => {
        expect(response.body).toHaveProperty('message');
      }),
  );
});

describe('GET /api/books/:id', () => {
  it('responds with a single book', async () =>
    request(app)
      .get(`/api/books/${id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toBe(id);
        expect(response.body).toHaveProperty('name');
        expect(response.body.name).toBe('Learn TypeScript');
        expect(response.body).toHaveProperty('isbn');
        expect(response.body).toHaveProperty('lend');
      }),
  );
  it('responds with an invalid ObjectId error', async () => {
      await request(app)
        .get('/api/books/asdsadsad')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(422);
    });
    it('responds with a not found error', async () => {
      await request(app)
        .get('/api/books/123456')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404);
    });
});
