/**
 * This function will remove all dupilcates from a array
 * @param {Array} array The array to remove dupilcates from.
 * @return {Array} The new array
 */
export const removeDupilcates = (array) => {
  return [...new Set(array)];
}
