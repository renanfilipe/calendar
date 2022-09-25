const todaysDate = new Date();
const todaysDay = todaysDate.getDate();
const todaysMonth = todaysDate.getMonth();
const todaysYear = todaysDate.getFullYear();

function isToday(day, month, year) {
  return todaysDay === day && todaysMonth === month && todaysYear === year;
}

export default isToday;
