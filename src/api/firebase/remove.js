import database from './database';

const remove = async (ref, key) => await database.ref(`${ref}/${key}`).remove();

export default remove;
