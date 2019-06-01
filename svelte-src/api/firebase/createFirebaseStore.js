import { database } from './index';

const createFirebaseStore = ref => {
  let callbacks = new Set();

  database.ref(ref).on('value', snapshot => {
    const value = snapshot.val();
    localStorage.setItem(`handleliste-${ref}`, JSON.stringify(value));
    callbacks.forEach(cb => cb(value));
  });

  const subscribe = cb => {
    try {
      cb(JSON.parse(localStorage.getItem(`handleliste-${ref}`)));
    } catch {
      cb({});
    }

    callbacks.add(cb);

    return () => callbacks.delete(cb);
  };

  return { subscribe };
};

export default createFirebaseStore;
