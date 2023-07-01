import createBook from './books/create-book';
import deleteBook from './books/delete-book';
import getBook from './books/get-book';
import getBooks from './books/get-books';
import updateBook from './books/update-book';
import createLend from './lends/create-lend';
import deleteLend from './lends/delete-lend';
import getLend from './lends/get-lend';
import getLends from './lends/get-lends';
import updateLend from './lends/update-lend';
import createReader from './readers/create-reader';
import deleteReader from './readers/delete-reader';
import getReader from './readers/get-reader';
import getReaders from './readers/get-readers';
import updateReader from './readers/update-reader';

export default {
    paths:{
        '/api/books':{
            ...getBooks,
            ...createBook
        },
        '/api/books/{id}':{
            ...getBook,
            ...updateBook,
            ...deleteBook
        },
        '/api/readers':{
            ...getReaders,
            ...createReader
        },
        '/api/readers/{id}':{
            ...getReader,
            ...updateReader,
            ...deleteReader
        },
        '/api/lends':{
            ...getLends,
            ...createLend
        },
        '/api/lends/{id}':{
            ...getLend,
            ...updateLend,
            ...deleteLend
        }
    }
}