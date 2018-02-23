import { connect } from 'react-redux';

import ShoppingList from './shopping-list';
import { postPurchasedItem } from '../../actions/purchased-items';

const findItemFromItemId = (items, itemId) => items.find(item => item.id === itemId);

const findPurchasedItemFromBagItemId = (purchasedItems, bagItemId) =>
  purchasedItems.find(purchasedItem => purchasedItem.bagItemId === bagItemId);

const mapItemDataToBagItem = (bagItem, items) => {
  const item = findItemFromItemId(items, bagItem.itemId);
  return ({
    ...bagItem,
    name: item && item.name,
  });
};

const mapPurchasedDataToBagItem = (bagItem, purchasedItems) => {
  const purchasedItem = findPurchasedItemFromBagItemId(purchasedItems, bagItem.id);
  return ({
    ...bagItem,
    purchased: purchasedItem && purchasedItem.purchased,
  });
};

const todayDateString = new Date().toLocaleDateString();
const filterNonPurchasedOrPurchasedToday = bagItem =>
  !bagItem.purchased || bagItem.purchased.toLocaleDateString() === todayDateString;

const sortByDateAdded = (a, b) => a.added - b.added;

const mapStateToProps = state => ({
  isLoading: state.bagItems.isLoading,
  items: state.bagItems.items
    .map(bagItem => mapItemDataToBagItem(bagItem, state.items.items))
    .map(bagItem => mapPurchasedDataToBagItem(bagItem, state.purchasedItems.items))
    .filter(filterNonPurchasedOrPurchasedToday)
    .sort(sortByDateAdded),
});

const mapDispatchToProps = dispatch => ({
  postPurchasedItem: bagItemId => dispatch(postPurchasedItem(bagItemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
