'use strict';

var _dist = require('../dist');

var _dist2 = _interopRequireDefault(_dist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = {
  person: {
    name: 'B Ray',
    age: 23
  },
  job: 'idk',
  location: 'North Dakota'
}; /**
    *  babel index.js --presets babel-preset-es2015 --out-file babelIndex.js
    *  Run this to complie before demo
    *  Then run node babelDemo.js
    */

var users = [user, {
  person: {
    name: 'A Steve',
    age: 24
  },
  job: 'Philly Somewhere',
  location: 'PA'
}];

var over21 = function over21(age) {
  return age >= 21;
};

var is23 = function is23(age) {
  return age === 23;
};

var filtered = _dist2.default.Arrays.filterObjects(users, over21, 'person.age', { caseSen: 'none' });

for (var i in filtered) {
  console.log('Filterd: ' + JSON.stringify(filtered[i]));
}
