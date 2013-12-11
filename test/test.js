var timekeeper = require('timekeeper');
var date = 'Wed Dec 11 2013 18:23:44 GMT+0200 (EET)';

test('set time', function() {
  timekeeper.freeze(date);
  assert(+(new Date) === +(new Date(date)));
});

test('reset time', function() {
  assert(+(new Date) !== +(new Date(date)));
});
