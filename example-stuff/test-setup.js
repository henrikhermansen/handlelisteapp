import sinon from 'sinon';

require('jsdom-global/register');
require('babel-polyfill');
require('babel-core/register')({
    // sparing-frontend is a ES6 module, so we need babel to transpile it before we run tests
    ignore: /node_modules\/(?!sparing-frontend)/
});

require('chai').use(require('chai-spies'));

sinon.stub(console, 'error').callsFake(warning => {
    if (warning && warning.indexOf('Warning: Failed prop type:') > -1) {
        throw new Error(warning);
    }
});
