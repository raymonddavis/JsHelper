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

var _JsHelper$Dates$getMo = _dist2.default.Dates.getMonthBounds(),
    start = _JsHelper$Dates$getMo.start,
    end = _JsHelper$Dates$getMo.end;

var weekDiff = 604800000;

console.log(start.getTime(), end.getTime(), end.getTime() - start.getTime(), end.getTime() - start.getTime() === weekDiff);
