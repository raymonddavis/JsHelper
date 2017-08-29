'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueFromObject = valueFromObject;
/**
 * This function search the item using a nexted string path
 * @param {Object} item The object you want to search in
 * @param {String} propertyName The path to the value seperated by dots (.).
 * @return {(*|undefined)} The found value or nothing
 */
function valueFromObject(item) {
  var propertyName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return propertyName ? propertyName.split('.').reduce(function (prev, curr) {
    return prev ? prev[curr] : undefined;
  }, item) : item;
}