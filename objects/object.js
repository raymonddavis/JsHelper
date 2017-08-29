'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueFromObject = valueFromObject;
/**
 *  Take in a Object and a string
 *  The Object is what you want to search through
 *  The string is the a list of keys seperated by dots
 *  The function will keep drilling deeper using the dot seperated field names
 *   until it reaches the value.
 *  If no value is found or a invalid field is inputted it will return undefined
 *  If no propertyName is not  or empty then it will return the data
 */
function valueFromObject(item) {
  var propertyName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return propertyName ? propertyName.split('.').reduce(function (prev, curr) {
    return prev ? prev[curr] : undefined;
  }, item) : item;
}