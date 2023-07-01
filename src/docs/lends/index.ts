import createLend from './create-lend';
import deleteLend from './delete-lend';
import getLend from './get-lend';
import getLends from './get-lends';
import updateLend from './update-lend';

export default {
    ...getLends,
    ...createLend,
    ...getLend,
    ...updateLend,
    ...deleteLend
}