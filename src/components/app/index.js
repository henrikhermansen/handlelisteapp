import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from './app';
import { initializeRequest } from '../../actions/initialization';

const mapStateToProps = state => ({ initialization: state.initialization });

const mapDispatchToProps = dispatch =>
  ({ initializeRequest: () => dispatch(initializeRequest(dispatch)) });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
