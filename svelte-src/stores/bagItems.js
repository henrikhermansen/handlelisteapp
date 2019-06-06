import { BAG_ITEMS, createFirebaseStore } from '../api/firebase';

const bagItems = createFirebaseStore(BAG_ITEMS);

export default bagItems;
