'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterObjects = exports.sortObjects = exports.removeDupilcates = undefined;

var _Objects = require('../Objects');

var _Objects2 = _interopRequireDefault(_Objects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * This function will remove all dupilcates from a array
 * @param {Array} array The array to remove dupilcates from.
 * @return {Array} The new array
 */
var removeDupilcates = exports.removeDupilcates = function removeDupilcates(array) {
  return [].concat(_toConsumableArray(new Set(array)));
};

/**
 * This function will sort an array of objects no matter the depth
 * @param {Array}   array The array to sort
 * @param {String}  propertyName The path to the value seperated by dots (.)
 * @param {Object}  config An object containing additional setting for the function
 * @param {string}  config.caseSen The type of case sensitive to use when sorting
 * @param {boolean} config.asc True for ascending and false for descending
 * @return {Array}  The sorted array
 */
var sortObjects = exports.sortObjects = function sortObjects(array) {
  var propertyName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$caseSen = _ref.caseSen,
      caseSen = _ref$caseSen === undefined ? 'lower' : _ref$caseSen,
      _ref$asc = _ref.asc,
      asc = _ref$asc === undefined ? true : _ref$asc;

  var _array = array.slice();
  var isInt = !isNaN(_Objects2.default.find(array[0], propertyName));

  _array.sort(function (a, b) {
    a = _Objects2.default.find(a, propertyName);
    b = _Objects2.default.find(b, propertyName);

    if (!asc) {
      var _ref2 = [a, b];
      b = _ref2[0];
      a = _ref2[1];
    }

    if (isInt) {
      return a - b;
    } else {
      a = caseSen === 'lower' ? a.toLowerCase() : caseSen === 'upper' ? a.toUpperCase() : a;
      b = caseSen === 'lower' ? b.toLowerCase() : caseSen === 'upper' ? b.toUpperCase() : b;

      return a < b ? -1 : a > b ? 1 : 0;
    }
  });

  return _array;
};

/**
 * This function will folter an array of objects no matter the depth
 * @param {Array} array The array to filter
 * @param {string} match What you want to find (Currently only support string) Need support for number boolean and custom match function
 * @param {string} propertyName The path to the value seperate by dotes (.)
 * @param {Object}  config An object containing additional setting for the function
 * @param {string}  config.caseSen The type of case sensitive to use when sorting
 * @return {Array}  The flitered array
 */
var filterObjects = exports.filterObjects = function filterObjects(array, match) {
  var propertyName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var _ref3 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      _ref3$caseSen = _ref3.caseSen,
      caseSen = _ref3$caseSen === undefined ? 'lower' : _ref3$caseSen;

  var _array = array.slice();

  return _array.filter(function (item) {
    item = _Objects2.default.find(item, propertyName);

    if (typeof match === 'function') {
      return match(item);
    } else {
      if (typeof item === 'string') {
        item = caseSen === 'lower' ? item.toLowerCase() : caseSen === 'upper' ? item.toUpperCase() : item;
        return item.indexOf(match) > -1;
      } else if (typeof item === 'number' || typeof item === 'boolean') {
        return item === match;
      }
    }
  });
};