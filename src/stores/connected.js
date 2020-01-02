import database from '../api/firebase/database';

let callbacks = new Set();

database.ref('.info/connected').on('value', snapshot => {
  const value = snapshot.val() || false;
  callbacks.forEach(cb => cb(value));
});

const subscribe = cb => {
  callbacks.add(cb);

  return () => callbacks.delete(cb);
};

export default { subscribe };
