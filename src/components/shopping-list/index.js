import { connect } from 'react-redux';

import ShoppingList from './shopping-list';

const mapStateToProps = state => ({
  isLoading: state.bagItems.isLoading,
  items: state.bagItems.items,
});

export default connect(mapStateToProps)(ShoppingList);
