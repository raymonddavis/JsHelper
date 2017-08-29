# JsHelpers
Just some JsHelpers I made for myself.

npm install jshelper

## Example
### ES6
```javascript
import JsHelper              = 'jshelper';
import Objects               = 'jshelper/Objects';
import { valueFromObject }   = 'jshelper/Objects';

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
```

## Basic Docs (WIP)
#### Objects
- valueFromObject

#### Arrays
- removeDuplicates

#### Dates
- isValid
- daysInMonth
- getMonth
- getWeek
- getWeekCentered
- getDay
- addToDate
- addMonths
- addWeeks
- addDays
- addHours
- addMinutes
- addSeconds
- addMilliseconds
