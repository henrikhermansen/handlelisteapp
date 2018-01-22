import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

const AppProvider = props => <Provider {...props} />;

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
