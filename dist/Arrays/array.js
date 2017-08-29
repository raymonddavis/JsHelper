"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * This function will remove all dupilcates from a array
 * @param {Array} array The array to remove dupilcates from.
 * @return {Array} The new array
 */
var removeDupilcates = exports.removeDupilcates = function removeDupilcates(array) {
  return [].concat(_toConsumableArray(new Set(array)));
};