'use strict';

var _dist = require('../dist');

var _dist2 = _interopRequireDefault(_dist);

var _objects = require('../dist/objects');

var _objects2 = _interopRequireDefault(_objects);

var _object = require('../dist/objects/object');

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

console.log(_dist2.default.Objects.valueFromObject(user, 'person.name'));
console.log(_objects2.default.valueFromObject(user, 'person.name'));
console.log((0, _object.valueFromObject)(user, 'person.name'));
