'use strict';

var _dist = require('../dist');

var _dist2 = _interopRequireDefault(_dist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = {
  person: {
    name: 'Ray',
    age: 23
  },
  job: 'idk',
  location: 'North Dakota'
}; /**
    *  babel index.js --presets babel-preset-es2015 --out-file babelIndex.js
    *  Run this to complie before demo
    *  Then run node babelDemo.js
    */

console.log('valueFromObject', _dist2.default.Objects.find(user, 'person.name'));

var users = [user, user];

console.log('Before removeDupilcates:', JSON.stringify(users));
console.log('After removeDupilcates:', JSON.stringify(_dist2.default.Arrays.removeDupilcates(users)));

var now = new Date();

console.log(_dist2.default.Dates.addYears(2, now));
console.log(_dist2.default.Dates.addMonths(2, now));
console.log(_dist2.default.Dates.addDays(2, now));
console.log(_dist2.default.Dates.addHours(2, now));
console.log(_dist2.default.Dates.addMinutes(2, now));
console.log(_dist2.default.Dates.addSeconds(2, now));
console.log(_dist2.default.Dates.addMilliseconds(2, now));
