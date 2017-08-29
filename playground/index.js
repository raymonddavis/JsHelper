/**
 *  babel index.js --presets babel-preset-es2015 --out-file babelIndex.js
 *  Run this to complie before demo
 *  Then run node babelDemo.js
 */

import JsHelper from '../dist';
import Objects from '../dist/objects';
import { valueFromObject } from '../dist/objects/object';

const user = {
  person: {
    name: 'Ray',
    age: 23
  },
  job: 'idk',
  location: 'North Dakota',
};

console.log(JsHelper.Objects.valueFromObject(user, 'person.name'));
console.log(Objects.valueFromObject(user, 'person.name'));
console.log(valueFromObject(user, 'person.name'));
