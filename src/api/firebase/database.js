import { database } from './index';

export const on = (ref, callback) => {
  database.ref(ref).on('value', snapshot => callback(snapshot.val()));
};

export const off = ref => database.ref(ref).off();

export const push = ref => database.ref(ref).push().key;

export const set = (ref, _item) => new Promise((resolve) => {
  const item = { ..._item };
  delete item.key;
  database.ref(ref).set(item);
  resolve(_item);
});

export const pushSet = (ref, _item) => new Promise((resolve) => {
  const newKey = push(ref);
  const item = {
    key: newKey,
    ..._item,
  };
  set(`${ref}/${newKey}`, item)
    .then(() => resolve(item));
});

export function mapFirebaseObjectToArray(fbObject) {
  const keys = Object.keys(fbObject);
  return keys.map(key => ({
    key,
    ...fbObject[key],
  }));
}
