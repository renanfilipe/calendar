const todaysDate = new Date();
const todaysDay = todaysDate.getUTCDate();
const todaysMonth = todaysDate.getUTCMonth();
const todaysYear = todaysDate.getUTCFullYear();

function isToday(day, month, year) {
  return todaysDay === day && todaysMonth === month && todaysYear === year;
}

export default isToday;
