const database = firebase.database();

const fbOn = (ref, callback) => {
  database.ref(ref).on('value', snapshot => callback(snapshot.val()));
};

const fbSet = (ref, _item) => new Promise((resolve) => {
  const item = { ..._item };
  delete item.id;
  database.ref(ref).set(item);
  resolve(_item);
});

const fbPushSet = (ref, _item) => new Promise((resolve) => {
  const newId = database.ref(ref).push().key;
  const item = {
    id: newId,
    ..._item,
  };
  fbSet(`${ref}/${newId}`, item)
    .then(() => resolve(item));
});

export default {
  get: (ref, callback) => fbOn(ref, callback),
  post: (ref, item) => fbPushSet(ref, item),
  put: (ref, item) => fbSet(ref, item),
};
