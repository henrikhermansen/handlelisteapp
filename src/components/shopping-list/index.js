import { connect } from 'react-redux';

import ShoppingList from './shopping-list';

const findItemFromId = (items, id) => items.find(item => item.id === id);

const mapDataToShoppingList = (items, bagItems) => bagItems.map(bagItem => ({
  ...bagItem,
  name: findItemFromId(items, bagItem.itemId).name,
}));

const sortByDateAdded = (a, b) => a.added - b.added;

const mapStateToProps = state => ({
  isLoading: state.bagItems.isLoading,
  items: state.items.isFetched
    ? mapDataToShoppingList(state.items.items, state.bagItems.items).sort(sortByDateAdded)
    : state.bagItems.items,
});

export default connect(mapStateToProps)(ShoppingList);
