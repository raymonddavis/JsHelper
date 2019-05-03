/**
 *  babel index.js --presets babel-preset-es2015 --out-file babelIndex.js
 *  Run this to complie before demo
 *  Then run node babelDemo.js
 */

import JsHelper from '../dist';

const user = {
  person: {
    name: 'B Ray',
    age: 23
  },
  job: 'idk',
  location: 'North Dakota',
};

const users = [
  user,
  {
    person: {
      name: 'A Steve',
      age: 24
    },
    job: 'Philly Somewhere',
    location: 'PA',
  },
];

const over21 = age => {
  return age >= 21;
}

const is23 = age => {
  return age === 23;
}

const filtered = JsHelper.Arrays.filterObjects(users, over21, 'person.age', { caseSen: 'none' });

for (let i in filtered) {
  console.log(`Filterd: ${JSON.stringify(filtered[i])}`);
}
