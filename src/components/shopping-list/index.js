import { connect } from 'react-redux';

import ShoppingList from './shopping-list';

const mapStateToProps = state => ({
  items: state.shoppingList.items,
});

export default connect(mapStateToProps)(ShoppingList);