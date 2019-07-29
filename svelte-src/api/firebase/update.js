import database from './database';

const update = async (ref, key, item) => await database.ref(`${ref}/${key}`).set(item);

export default update;
