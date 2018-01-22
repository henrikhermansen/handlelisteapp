import { connect } from 'react-redux';

import App from './app';
import { initializeRequest } from '../../actions/initialization';

const mapStateToProps = state => ({ initialization: state.initialization });

const mapDispatchToProps = dispatch => ({ initializeRequest: () => dispatch(initializeRequest()) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
