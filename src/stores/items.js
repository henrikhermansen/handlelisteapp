import { ITEMS, createFirebaseStore } from '../api/firebase';

const items = createFirebaseStore(ITEMS);

export default items;
