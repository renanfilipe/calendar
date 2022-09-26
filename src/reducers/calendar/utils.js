import axios from "axios";
import debounce from "lodash/debounce";

export function buildReminder(payload) {
  const { date } = payload;
  const dateValue = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  const hourValue = `${date.getHours()}`;

  return {
    date: dateValue,
    hour: hourValue,
    data: {
      ...payload,
      date: `${dateValue}-${hourValue}`,
    },
  };
}

function addTrailingZero(value) {
  return value < 10 ? `0${value}` : value;
}

export const fetchWeather = debounce(({ city, date }, onSuccess, onFailure) => {
  const url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  const params = `key=${process.env.REACT_APP_VISUAL_CROSSING_API_KEY}&include=current`;

  if (date) {
    const year = date.getFullYear();
    const month = addTrailingZero(date.getMonth() + 1);
    const day = addTrailingZero(date.getDate());
    const formattedDate = `${year}-${month}-${day}`;

    return axios
      .get(`${url}/${city}/${formattedDate}?${params}`)
      .then(onSuccess)
      .catch(onFailure);
  }

  return axios.get(`${url}/${city}?${params}`).then(onSuccess).catch(onFailure);
}, 1000);
