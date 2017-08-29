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
 * This function return the number of days in a month
 * @param {Date} [date = new Date()] any object that is an instanceof Date
 * @return {number || undefined} The number of days in month or undefined if date is no valid
 */
export const daysInMonth = (date = new Date()) => {
  return isValid(date)
  ? new Date(date.getFullYear(), date.getMonth(), 0).getDate()
  : undefined;
}

export const getMonth = (date = new Date()) => {
  return isValid(date)
  ? {
    start: new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0),
    end: new Date(date.getFullYear(), date.getMonth(), daysInMonth(date) - 1, 23, 59, 59, 59),
  }
  : undefined;
}

export const getWeek = (date = new Date()) => {
  return isValid(date)
  ? {
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay(), 0, 0, 0, 0),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 5, 23, 59, 59, 59),
  }
  : undefined;
}

export const getWeekCentered = (date = new Date()) => {
  return isValid(date)
  ? {
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate() - 3, 0, 0, 0, 0),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 5, 23, 59, 59, 59),
  }
  : undefined;
}

export const getDay = (date = new Date()) => {
  return isValid(date)
  ? {
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 59),
  }
  : undefined;
}

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

export const addYears = (years = 0, date = new Date()) => {
  return addToDate({ years }, date);
}

export const addMonths = (months = 0, date = new Date()) => {
  return addToDate({ months }, date);
}

export const addWeeks = (weeks = 0, date = new Date()) => {
  return addToDate({ weeks }, date);
}

export const addDays = (days = 0, date = new Date()) => {
  return addToDate({ days }, date);
}

export const addHours = (hours = 0, date = new Date()) => {
  return addToDate({ hours }, date);
}

export const addMinutes = (minutes = 0, date = new Date()) => {
  return addToDate({ minutes }, date);
}

export const addSeconds = (seconds = 0, date = new Date()) => {
  return addToDate({ seconds }, date);
}

export const addMilliseconds = (milliseconds = 0, date = new Date()) => {
  return addToDate({ milliseconds }, date);
}
