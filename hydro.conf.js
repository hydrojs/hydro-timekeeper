/**
 * Test config.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  var timekeeper = require('./index');

  hydro.set({
    plugins: [timekeeper],
    attach: global,
    proxies: {
      test: 'addTest'
    },
    suite: 'hydro-timekeeper',
    formatter: 'hydro-simple',
    globals: {
      assert: require('simple-assert')
    },
    tests: [
      'test'
    ]
  });
};
