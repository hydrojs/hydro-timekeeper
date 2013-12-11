/**
 * External dependencies.
 */

var timekeeper = require('timekeeper');

/**
 * Reset Timekeeper stubs before each test
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  hydro.on('pre:test', function(file) {
    timekeeper.reset();
  });
};
