import axios from "axios";

function fetchCityNames(value) {
  return axios.get(
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete",
    {
      params: { apikey: process.env.REACT_APP_ACCU_WEATHER_API_KEY, q: value },
    }
  );
}

export default fetchCityNames;
