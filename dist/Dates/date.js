"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This function returns true if date is an instanceof Date
 * @param {Date} date any object that is an instanceof Date
 * @return {boolean} if the date is an instanceof Date
 */
var isValid = exports.isValid = function isValid(date) {
  if (!(date instanceof Date)) {
    console.error(date + " is not an instanceof Date");
    return false;
  }

  return true;
};

/**
 * This function returns the number of days in a month
 * @param {Date} date any object that is an instanceof Date
 * @return {(number|undefined)} The number of days in month or undefined if date is no valid
 */
var daysInMonth = exports.daysInMonth = function daysInMonth() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

  return isValid(date) ? new Date(date.getFullYear(), date.getMonth(), 0).getDate() : undefined;
};

/**
 * This function returns the start and end dates of the month
 * @param {Date} date any object that is an instanceof Date
 * @return {(Object|undefined)} A object containing the start and end dates or nothing
 */
var getMonthBounds = exports.getMonthBounds = function getMonthBounds() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

  return isValid(date) ? {
    start: new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0),
    end: new Date(date.getFullYear(), date.getMonth(), daysInMonth(date), 23, 59, 59, 59)
  } : undefined;
};

/**
 * This function returns the start and end dates of the week
 * @param {Date} date any object that is an instanceof Date
 * @return {(Object|undefined)} A object containing the start and end dates or nothing
 */
var getWeekBounds = exports.getWeekBounds = function getWeekBounds() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

  return isValid(date) ? {
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay(), 0, 0, 0, 0),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 6, 23, 59, 59, 59)
  } : undefined;
};

/**
 * This function returns the start and end dates of the week centered around the date
 * @param {Date} date any object that is an instanceof Date
 * @return {(Object|undefined)} A object containing the start and end dates or nothing
 */
var getWeekBoundsCentered = exports.getWeekBoundsCentered = function getWeekBoundsCentered() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

  return isValid(date) ? {
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate() - 3, 0, 0, 0, 0),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 5, 23, 59, 59, 59)
  } : undefined;
};

/**
 * This function returns the start and end dates of the day
 * @param {Date} date any object that is an instanceof Date
 * @return {(Object|undefined)} A object containing the start and end dates or nothing
 */
var getDayBounds = exports.getDayBounds = function getDayBounds() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

  return isValid(date) ? {
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 59)
  } : undefined;
};

/**
 * This function returns a new date with the additions
 * @param {Object} config An object containing the fields and how much to add
 * @param {number} config.years The number of years to add
 * @param {number} config.months The number of months to add
 * @param {number} config.days The number of days to add
 * @param {number} config.hours The number of hours to add
 * @param {number} config.minutes The number of minutes to add
 * @param {number} config.seconds The number of seconds to add
 * @param {number} config.milliseconds The number of milliseconds to add
 * @param {Date} date any object that is an instanceof Date
 * @return {(Date|undefined)} A Date with the additions or nothing
 */
var addToDate = exports.addToDate = function addToDate(_ref) {
  var _ref$years = _ref.years,
      years = _ref$years === undefined ? 0 : _ref$years,
      _ref$months = _ref.months,
      months = _ref$months === undefined ? 0 : _ref$months,
      _ref$days = _ref.days,
      days = _ref$days === undefined ? 0 : _ref$days,
      _ref$hours = _ref.hours,
      hours = _ref$hours === undefined ? 0 : _ref$hours,
      _ref$minutes = _ref.minutes,
      minutes = _ref$minutes === undefined ? 0 : _ref$minutes,
      _ref$seconds = _ref.seconds,
      seconds = _ref$seconds === undefined ? 0 : _ref$seconds,
      _ref$milliseconds = _ref.milliseconds,
      milliseconds = _ref$milliseconds === undefined ? 0 : _ref$milliseconds;
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  return isValid(date) ? new Date(date.getFullYear() + years, date.getMonth() + months, date.getDate() + days, date.getHours() + hours, date.getMinutes() + minutes, date.getSeconds() + seconds, date.getMilliseconds() + milliseconds) : undefined;
};

/**
 * This function returns a new Date with the added years
 * @param {Date} date any object that is an instanceof Date
 * @return {(Date|undefined)} A new Date with the addition or nothing
 */
var addYears = exports.addYears = function addYears() {
  var years = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  return addToDate({ years: years }, date);
};

/**
 * This function returns a new Date with the added months
 * @param {Date} date any object that is an instanceof Date
 * @return {(Date|undefined)} A new Date with the addition or nothing
 */
var addMonths = exports.addMonths = function addMonths() {
  var months = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  return addToDate({ months: months }, date);
};

/**
 * This function returns a new Date with the added weeks
 * @param {Date} date any object that is an instanceof Date
 * @return {(Date|undefined)} A new Date with the addition or nothing
 */
var addWeeks = exports.addWeeks = function addWeeks() {
  var weeks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  return addToDate({ weeks: weeks }, date);
};

/**
 * This function returns a new Date with the added days
 * @param {Date} date any object that is an instanceof Date
 * @return {(Date|undefined)} A new Date with the addition or nothing
 */
var addDays = exports.addDays = function addDays() {
  var days = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  return addToDate({ days: days }, date);
};

/**
 * This function returns a new Date with the added hours
 * @param {Date} date any object that is an instanceof Date
 * @return {(Date|undefined)} A new Date with the addition or nothing
 */
var addHours = exports.addHours = function addHours() {
  var hours = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  return addToDate({ hours: hours }, date);
};

/**
 * This function returns a new Date with the added minutes
 * @param {Date} date any object that is an instanceof Date
 * @return {(Date|undefined)} A new Date with the addition or nothing
 */
var addMinutes = exports.addMinutes = function addMinutes() {
  var minutes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  return addToDate({ minutes: minutes }, date);
};

/**
 * This function returns a new Date with the added seconds
 * @param {Date} date any object that is an instanceof Date
 * @return {(Date|undefined)} A new Date with the addition or nothing
 */
var addSeconds = exports.addSeconds = function addSeconds() {
  var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  return addToDate({ seconds: seconds }, date);
};

/**
 * This function returns a new Date with the added milliseconds
 * @param {Date} date any object that is an instanceof Date
 * @return {(Date|undefined)} A new Date with the addition or nothing
 */
var addMilliseconds = exports.addMilliseconds = function addMilliseconds() {
  var milliseconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  return addToDate({ milliseconds: milliseconds }, date);
};