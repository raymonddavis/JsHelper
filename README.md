# JsHelpers
Just some JsHelpers I made for myself.

npm install jshelper

## Example
### ES6
```javascript
import JsHelper              = 'jshelper';
import Objects               = 'jshelper/objects';
import { valueFromObject }   = 'jshelper/objects';

var data = {
    person: {
        name: 'Ray Davis',
        age: 23,
    },
    job: 'idk',
};

const _jsHelper         = JsHelper.Objects.valueFromObject(data, 'person.name');
const _objects          = Objects.valueFromObject(data, 'person.name');
const _valueFromObject  = valueFromObject(data, 'person.name');

console.log(`JsHelper Output:           ${_jsHelper}`);
console.log(`Objects Output:            ${_objects}`);
console.log(`valueFromObject Output:    ${_valueFromObject}`);
```
### Non ES6
```javascript
const JsHelper              = require('jshelper').default;
const Objects               = require('jshelper/objects').default;
const { valueFromObject }   = require('jshelper/objects').default;

var data = {
    person: {
        name: 'Ray Davis',
        age: 23,
    },
    job: 'idk',
};

const _jsHelper         = JsHelper.Objects.valueFromObject(data, 'person.name');
const _objects          = Objects.valueFromObject(data, 'person.name');
const _valueFromObject  = valueFromObject(data, 'person.name');

console.log(`JsHelper Output:           ${_jsHelper}`);
console.log(`Objects Output:            ${_objects}`);
console.log(`valueFromObject Output:    ${_valueFromObject}`);
```
