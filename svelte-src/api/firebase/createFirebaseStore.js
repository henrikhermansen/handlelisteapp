import { database } from './index';
import { mapFirebaseObjectToArray } from '../../util';

const createFirebaseStore = ref => {
  let items = [];

  const subscribe = cb => {
    cb(items);
    database.ref(ref).on('value', snapshot => {
      items = mapFirebaseObjectToArray(snapshot.val());
      cb(items);
    });

    return () => {
      database.ref(ref).off();
    };
  };

  return { subscribe };
};

export default createFirebaseStore;
