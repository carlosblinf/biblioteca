import request from 'supertest';

import app from '../../src/app'
import { sequelizeConnection } from '../../src/db';
import { Book } from '../../src/db/models/book.model';
import { Lend } from '../../src/db/models/lend.model';
import { Reader } from '../../src/db/models/reader.model';

  
  // afterAll(async () => {
  //   await sequelizeConnection.close();
  //   await Lend.create({bookId:1, readerId:1});
  // await Lend.create({bookId:2, readerId:2});
  // });
  beforeAll(async () => {
    await sequelizeConnection.sync({force: true}).catch((err)=>console.log("bad DB connection", err));
    await Book.create({name: "Learn React", isbn:"305-598-21508-8", available: true});
    await Book.create({name: "The Truth", isbn:"443-598-21508-8", available: true});
  
    await Reader.create({name: "John W"});
    await Reader.create({name: "Carlos"});
  
    await Lend.create({bookId:1, readerId:1});
  });

  afterAll(async () => {
    await sequelizeConnection.close();
  });

describe('GET /api/lends', () => {
  it('responds with an array of lends', async () => {
    await request(app)
      .get('/api/lends')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('length');
        expect(response.body.length).toEqual(1);
      });
  });
});

let id: number;
let bookId: number;
let readerId: number;
describe(`POST /api/lends`, () => {
  it('responds with an created object lend', async () =>
  request(app)
      .post('/api/lends')
      .set('Accept', 'application/json')
      .send({readerId:1,bookId:2})
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        id = response.body.id;
        bookId = response.body.bookId;
        readerId = response.body.readerId;
        expect(response.body).toHaveProperty('bookId');
        expect(response.body.bookId).toBe(2);
        expect(response.body).toHaveProperty('readerId');
        expect(response.body.readerId).toBe(1);
      }),
  );
  it('responds with an error if the lend is invalid', async () =>
  request(app)
      .post('/api/lends')
      .set('Accept', 'application/json')
      .send({bookId:5})
      .expect('Content-Type', /json/)
      .expect(422)
  );
});

describe('GET /api/lends/:id', () => {
  it('responds with a single lend', async () =>
  request(app)
      .get(`/api/lends/${id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toBe(id);
        expect(response.body).toHaveProperty('bookId');
        expect(response.body.bookId).toBe(bookId);
        expect(response.body).toHaveProperty('readerId');
        expect(response.body.readerId).toBe(readerId);
      }),
  );
  it('responds with an invalid ObjectId error', async () => {
      await request(app)
        .get('/api/lends/asdsadsad')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(422);
    });
    it('responds with a not found error', async () => {
      await request(app)
        .get('/api/lends/123456')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404);
    });
});

describe('PUT /api/lends/:id', () => {
  it('responds with an invalid ObjectId error', async () => {
    await request(app)
      .put('/api/lends/adsfadsfasdfasdf')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404);
  });
  it('responds with a not found error', async () => {
    await request(app)
      .put('/api/lends/12323')
      .set('Accept', 'application/json')
      .send({name: "Marcos"})
      .expect('Content-Type', /json/)
      .expect(404);
  });
  it('responds with a single reader', async () =>
    request(app)
      .put(`/api/lends?readerId=${readerId}&bookId=${bookId}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toBe(id);
        expect(response.body).toHaveProperty('bookId');
        expect(response.body.bookId).toBe(bookId);
        expect(response.body).toHaveProperty('readerId');
        expect(response.body.readerId).toBe(readerId);
        expect(response.body).toHaveProperty('dateReturn');
        expect(response.body.dateReturn).not.toBeNull();
      }),
  );
});
