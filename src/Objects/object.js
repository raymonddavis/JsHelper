/**
 * This function search the item using a nexted string path
 * @param {Object} item The object you want to search in
 * @param {String} propertyName The path to the value seperated by dots (.).
 * @return {(*|undefined)} The found value or nothing
 */
export function valueFromObject(item, propertyName = '') {
  return propertyName ? propertyName.split('.').reduce((prev, curr) => {
    return prev ? prev[curr] : undefined;
  }, item) : item;
}
