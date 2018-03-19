const database = firebase.database();

const fbOnce = ref => new Promise((resolve) => {
  database.ref(ref).once('value')
    .then(snapshot => resolve(snapshot.val()));
});

export default {
  get: ref => fbOnce(ref),
};
