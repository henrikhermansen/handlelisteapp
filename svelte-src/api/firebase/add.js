import database from './database';

const add = async (ref, item) => await database.ref(ref).push(item);

export default add;
