import { connect } from 'react-redux';

import ShoppingList from './shopping-list';
import { updateBagItem } from '../../actions/bag-items';

const todayDateString = new Date().toLocaleDateString();
const filterNonPurchasedOrPurchasedToday = bagItem =>
  !bagItem.purchased || new Date(bagItem.purchased).toLocaleDateString() === todayDateString;

const sortByDateAdded = (a, b) => a.added.localeCompare(b.added);

const mapStateToProps = state => ({
  isLoading: state.bagItems.isLoading,
  items: state.items.items,
  bagItems: state.bagItems.items
    .filter(filterNonPurchasedOrPurchasedToday)
    .sort(sortByDateAdded),
});

const mapDispatchToProps = dispatch => ({
  updateBagItem: item => dispatch(updateBagItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
