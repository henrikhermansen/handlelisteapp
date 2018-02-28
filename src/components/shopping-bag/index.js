import { connect } from 'react-redux';

import ShoppingBag from './shopping-bag';
import { updateBagItem } from '../../actions/bag-items';

const todayDateString = new Date().toLocaleDateString();
const filterNonPurchasedOrPurchasedToday = bagItem =>
  !bagItem.purchased || new Date(bagItem.purchased).toLocaleDateString() === todayDateString;

const sortByDateAdded = (a, b) => a.added.localeCompare(b.added);

const mapStateToProps = state => ({
  isLoading: state.bagItems.isLoading || state.items.isLoading,
  items: state.items.items,
  bagItems: state.bagItems.bagItems
    .filter(filterNonPurchasedOrPurchasedToday)
    .sort(sortByDateAdded),
});

const mapDispatchToProps = dispatch => ({
  updateBagItem: item => dispatch(updateBagItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag);
