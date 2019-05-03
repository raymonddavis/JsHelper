import Objects from '../Objects';

/**
 * This function will remove all dupilcates from a array
 * @param {Array} array The array to remove dupilcates from.
 * @return {Array} The new array
 */
export const removeDupilcates = (array) => {
  return [...new Set(array)];
}

/**
 * This function will sort an array of objects no matter the depth
 * @param {Array}   array The array to sort
 * @param {String}  propertyName The path to the value seperated by dots (.)
 * @param {Object}  config An object containing additional setting for the function
 * @param {string}  config.caseSen The type of case sensitive to use when sorting
 * @param {boolean} config.asc True for ascending and false for descending
 * @return {Array}  The sorted array
 */
export const sortObjects = (array, propertyName = '', { caseSen = 'lower', asc = true } = {}) => {
  const _array = array.slice();
  const isInt = !isNaN(Objects.find(array[0], propertyName));

  _array.sort((a, b) => {
    a = Objects.find(a, propertyName);
    b = Objects.find(b, propertyName);

    if (!asc) {
      [b, a] = [a, b];
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
}

/**
 * This function will folter an array of objects no matter the depth
 * @param {Array} array The array to filter
 * @param {string} match What you want to find (Currently only support string) Need support for number boolean and custom match function
 * @param {string} propertyName The path to the value seperate by dotes (.)
 * @param {Object}  config An object containing additional setting for the function
 * @param {string}  config.caseSen The type of case sensitive to use when sorting
 * @return {Array}  The flitered array
 */
export const filterObjects = (array, match, propertyName = '', { caseSen = 'lower' } = {}) => {
  const _array = array.slice();

  return _array.filter(item => {
    item = Objects.find(item, propertyName);

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
}
