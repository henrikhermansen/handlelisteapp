import { connect } from 'react-redux';

import AddBagItem from './add-bag-item';
import { addBagItem } from '../../actions/bag-items';

const sortByName = (a, b) => a.name.localeCompare(b.name);

const mapStateToProps = state => ({
  isLoading: state.items.isLoading,
  items: state.items.items
    .sort(sortByName),
});

const mapDispatchToProps = dispatch => ({
  addBagItem: item => dispatch(addBagItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBagItem);
