/**
 *  Take in a Object and a string
 *  The Object is what you want to search through
 *  The string is the a list of keys seperated by dots
 *  The function will keep drilling deeper using the dot seperated field names
    until it reaches the value.
 *  If no value is found or a invalid field is inputted it will return undefined
 *  If no propertyName is not  or empty then it will return the data
 */
export const getValueFromObject = (item, propertyName = '') => {
  return propertyName ? propertyName.split('.').reduce((prev, curr) => {
      return prev ? prev[curr] : undefined;
  }, item) : item;
}
