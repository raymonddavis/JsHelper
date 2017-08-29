const JsHelper = require('../dist/index');
const ObjectsHelper = require('../dist/objects');
const { getValueFromObject }= require('../dist/index');

const user = {
  person: {
    name: 'Ray',
    age: 23
  },
  job: 'idk',
  location: 'North Dakota',
};

console.log(JsHelper.getValueFromObject(user, 'person.name'));
console.log(ObjectsHelper.getValueFromObject(user, 'person.name'));
console.log(getValueFromObject(user, 'person.name'));
