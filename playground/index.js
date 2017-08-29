/**
 *  babel index.js --presets babel-preset-es2015 --out-file babelIndex.js
 *  Run this to complie before demo
 *  Then run node babelDemo.js
 */

import JsHelper from '../dist';

// import Objects from '../objects';
// import { valueFromObject } from '../objects/object';

const user = {
  person: {
    name: 'Ray',
    age: 23
  },
  job: 'idk',
  location: 'North Dakota',
};

console.log('valueFromObject', JsHelper.Objects.valueFromObject(user, 'person.name'));

const users = [
  user,
  user,
];

console.log('Before removeDupilcates:', JSON.stringify(users));
console.log('After removeDupilcates:', JSON.stringify(JsHelper.Arrays.removeDupilcates(users)));


const now = new Date();

console.log(JsHelper.Dates.addYears(2, now));
console.log(JsHelper.Dates.addMonths(2, now));
console.log(JsHelper.Dates.addDays(2, now));
console.log(JsHelper.Dates.addHours(2, now));
console.log(JsHelper.Dates.addMinutes(2, now));
console.log(JsHelper.Dates.addSeconds(2, now));
console.log(JsHelper.Dates.addMilliseconds(2, now));
