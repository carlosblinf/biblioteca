import createReader from './create-reader';
import deleteReader from './delete-reader';
import getReader from './get-reader';
import getReaders from './get-readers';
import updateReader from './update-reader';

export default {
    ...getReaders,
    ...createReader,
    ...getReader,
    ...updateReader,
    ...deleteReader
}