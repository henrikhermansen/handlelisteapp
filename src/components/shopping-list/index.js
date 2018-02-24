import { connect } from 'react-redux';

import ShoppingList from './shopping-list';
import { updateBagItem } from '../../actions/bag-items';

const findItemFromItemId = (items, itemId) => items.find(item => item.id === itemId);

const mapItemDataToBagItem = (bagItem, items) => {
  const item = findItemFromItemId(items, bagItem.itemId);
  return ({
    ...bagItem,
    name: item && item.name,
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
    .filter(filterNonPurchasedOrPurchasedToday)
    .sort(sortByDateAdded),
});

const mapDispatchToProps = dispatch => ({
  updateBagItem: bagItem => dispatch(updateBagItem(bagItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
