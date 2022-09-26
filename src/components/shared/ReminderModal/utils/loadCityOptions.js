import fetchCityNames from "api/fetchCityNames";
import { toast } from "components/shared/Toast/Toast";
import debounce from "lodash/debounce";

function loadCityOptions(value, callback) {
  fetchCityNames(value)
    .then((response) => {
      const cities = new Set(response.data.map((item) => item.LocalizedName));
      const options = Array.from(cities).map((city) => ({
        value: city,
        label: city,
      }));
      callback(options);
    })
    .catch(() => {
      toast("Failed to load data", { type: "error" });
    });
}

export default debounce(loadCityOptions, 500);
