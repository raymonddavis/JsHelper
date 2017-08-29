"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isValid = exports.isValid = function isValid(date) {
  if (!(date instanceof Date)) {
    console.error(date + " is not an instanceof Date");
    return false;
  }

  return true;
};

var daysInMonth = exports.daysInMonth = function daysInMonth() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

  return isValid(date) ? new Date(date.getFullYear(), date.getMonth(), 0).getDate() : undefined;
};

var getMonth = exports.getMonth = function getMonth() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

  return isValid(date) ? {
    start: new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0),
    end: new Date(date.getFullYear(), date.getMonth(), daysInMonth(date) - 1, 23, 59, 59, 59)
  } : undefined;
};

var getWeek = exports.getWeek = function getWeek() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

  return isValid(date) ? {
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay(), 0, 0, 0, 0),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 5, 23, 59, 59, 59)
  } : undefined;
};

var getWeekCentered = exports.getWeekCentered = function getWeekCentered() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

  return isValid(date) ? {
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate() - 3, 0, 0, 0, 0),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 5, 23, 59, 59, 59)
  } : undefined;
};

var getDay = exports.getDay = function getDay() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

  return isValid(date) ? {
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 59)
  } : undefined;
};

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

var addYears = exports.addYears = function addYears() {
  var years = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  return addToDate({ years: years }, date);
};

var addMonths = exports.addMonths = function addMonths() {
  var months = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  return addToDate({ months: months }, date);
};

var addWeeks = exports.addWeeks = function addWeeks() {
  var weeks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  return addToDate({ weeks: weeks }, date);
};

var addDays = exports.addDays = function addDays() {
  var days = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  return addToDate({ days: days }, date);
};

var addHours = exports.addHours = function addHours() {
  var hours = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  return addToDate({ hours: hours }, date);
};

var addMinutes = exports.addMinutes = function addMinutes() {
  var minutes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  return addToDate({ minutes: minutes }, date);
};

var addSeconds = exports.addSeconds = function addSeconds() {
  var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  return addToDate({ seconds: seconds }, date);
};

var addMilliseconds = exports.addMilliseconds = function addMilliseconds() {
  var milliseconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  return addToDate({ milliseconds: milliseconds }, date);
};