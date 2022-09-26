import axios from "axios";

function addTrailingZero(value) {
  return value < 10 ? `0${value}` : value;
}

function formatDataForBE(date) {
  const year = date.getFullYear();
  const month = addTrailingZero(date.getMonth() + 1);
  const day = addTrailingZero(date.getDate());
  return `${year}-${month}-${day}`;
}

function getWeatherByDate({ date, city }) {
  const url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  const params = `key=${process.env.REACT_APP_VISUAL_CROSSING_API_KEY}&include=current`;
  const formattedDate = formatDataForBE(date);

  return axios.get(`${url}/${city}/${formattedDate}?${params}`);
}

export default getWeatherByDate;
