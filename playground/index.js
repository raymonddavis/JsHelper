/**
 *  babel index.js --presets babel-preset-es2015 --out-file babelIndex.js
 *  Run this to complie before demo
 *  Then run node babelDemo.js
 */

import JsHelper from '../dist';

const user = {
  person: {
    name: 'Ray',
    age: 23
  },
  job: 'idk',
  location: 'North Dakota',
};

console.log('valueFromObject', JsHelper.Objects.find(user, 'person.name'));

const users = [
  user,
  user,
];

console.log('Before removeDupilcates:', JSON.stringify(users));
console.log('After removeDupilcates:', JSON.stringify(JsHelper.Arrays.removeDupilcates(users)));


const now = new Date();

const { start, end } = JsHelper.Dates.getMonthBounds();

const weekDiff = 604800000;

console.log(start.getTime(), end.getTime(),  (end.getTime() - start.getTime()), (end.getTime() - start.getTime()) === weekDiff);
