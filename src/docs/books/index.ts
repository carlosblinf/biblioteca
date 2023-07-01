import createBook from './create-book';
import deleteBook from './delete-book';
import getBook from './get-book';
import getBooks from './get-books';
import updateBook from './update-book';

export default {
    ...getBooks,
    ...createBook,
    ...getBook,
    ...updateBook,
    ...deleteBook
}