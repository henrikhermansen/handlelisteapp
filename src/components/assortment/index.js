import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Assortment from './assortment';
import { updateItem, addItem } from '../../actions/items';

const sortByName = (a, b) => a.name.localeCompare(b.name);

const mapStateToProps = state => ({
  isLoading: state.items.isLoading,
  items: state.items.items
    .sort(sortByName),
});

const mapDispatchToProps = dispatch => ({
  updateItem: item => dispatch(updateItem(item)),
  addItem: item => dispatch(addItem(item)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Assortment));
