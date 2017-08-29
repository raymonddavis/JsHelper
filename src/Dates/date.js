/**
 * This function returns true if date is an instanceof Date
 * @param {Date} date any object that is an instanceof Date
 * @return {boolean} if the date is an instanceof Date
 */
export const isValid = date => {
  if (!(date instanceof Date)) {
    console.error(`${date} is not an instanceof Date`);
    return false;
  }

  return true;
}

/**
 * This function returns the number of days in a month
 * @param {Date} date any object that is an instanceof Date
 * @return {(number|undefined)} The number of days in month or undefined if date is no valid
 */
export const daysInMonth = (date = new Date()) => {
  return isValid(date)
  ? new Date(date.getFullYear(), date.getMonth(), 0).getDate()
  : undefined;
}

/**
 * This function returns the start and end dates of the month
 * @param {Date} date any object that is an instanceof Date
 * @return {(Object|undefined)} A object containing the start and end dates or nothing
 */
export const getMonth = (date = new Date()) => {
  return isValid(date)
  ? {
    start: new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0),
    end: new Date(date.getFullYear(), date.getMonth(), daysInMonth(date) - 1, 23, 59, 59, 59),
  }
  : undefined;
}

/**
 * This function returns the start and end dates of the week
 * @param {Date} date any object that is an instanceof Date
 * @return {(Object|undefined)} A object containing the start and end dates or nothing
 */
export const getWeek = (date = new Date()) => {
  return isValid(date)
  ? {
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay(), 0, 0, 0, 0),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 5, 23, 59, 59, 59),
  }
  : undefined;
}

/**
 * This function returns the start and end dates of the week centered around the date
 * @param {Date} date any object that is an instanceof Date
 * @return {(Object|undefined)} A object containing the start and end dates or nothing
 */
export const getWeekCentered = (date = new Date()) => {
  return isValid(date)
  ? {
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate() - 3, 0, 0, 0, 0),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 5, 23, 59, 59, 59),
  }
  : undefined;
}

/**
 * This function returns the start and end dates of the day
 * @param {Date} date any object that is an instanceof Date
 * @return {(Object|undefined)} A object containing the start and end dates or nothing
 */
export const getDay = (date = new Date()) => {
  return isValid(date)
  ? {
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 59),
  }
  : undefined;
}

/**
 * This function returns a new date with the additions
 * @param {Date} date any object that is an instanceof Date
 * @return {(Date|undefined)} A Date with the additions or nothing
 */
export const addToDate = (
  {
    years = 0,
    months = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
    milliseconds = 0
  },
  date = new Date()
) => {
  return isValid(date)
  ? new Date(
      date.getFullYear() + years,
      date.getMonth() + months,
      date.getDate() + days,
      date.getHours() + hours,
      date.getMinutes() + minutes,
      date.getSeconds() + seconds,
      date.getMilliseconds() + milliseconds
    )
  : undefined;
}

/**
 * This function returns a new Date with the added years
 * @param {Date} date any object that is an instanceof Date
 * @return {(Date|undefined)} A new Date with the addition or nothing
 */
export const addYears = (years = 0, date = new Date()) => {
  return addToDate({ years }, date);
}

/**
 * This function returns a new Date with the added months
 * @param {Date} date any object that is an instanceof Date
 * @return {(Date|undefined)} A new Date with the addition or nothing
 */
export const addMonths = (months = 0, date = new Date()) => {
  return addToDate({ months }, date);
}

/**
 * This function returns a new Date with the added weeks
 * @param {Date} date any object that is an instanceof Date
 * @return {(Date|undefined)} A new Date with the addition or nothing
 */
export const addWeeks = (weeks = 0, date = new Date()) => {
  return addToDate({ weeks }, date);
}

/**
 * This function returns a new Date with the added days
 * @param {Date} date any object that is an instanceof Date
 * @return {(Date|undefined)} A new Date with the addition or nothing
 */
export const addDays = (days = 0, date = new Date()) => {
  return addToDate({ days }, date);
}

/**
 * This function returns a new Date with the added hours
 * @param {Date} date any object that is an instanceof Date
 * @return {(Date|undefined)} A new Date with the addition or nothing
 */
export const addHours = (hours = 0, date = new Date()) => {
  return addToDate({ hours }, date);
}

/**
 * This function returns a new Date with the added minutes
 * @param {Date} date any object that is an instanceof Date
 * @return {(Date|undefined)} A new Date with the addition or nothing
 */
export const addMinutes = (minutes = 0, date = new Date()) => {
  return addToDate({ minutes }, date);
}

/**
 * This function returns a new Date with the added seconds
 * @param {Date} date any object that is an instanceof Date
 * @return {(Date|undefined)} A new Date with the addition or nothing
 */
export const addSeconds = (seconds = 0, date = new Date()) => {
  return addToDate({ seconds }, date);
}

/**
 * This function returns a new Date with the added milliseconds
 * @param {Date} date any object that is an instanceof Date
 * @return {(Date|undefined)} A new Date with the addition or nothing
 */
export const addMilliseconds = (milliseconds = 0, date = new Date()) => {
  return addToDate({ milliseconds }, date);
}
