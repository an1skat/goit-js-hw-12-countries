import fetchCountries from "./fetchCountries.js";
import renderCountries from "./renderCountries.js";

const input = document.querySelector("input");

input.addEventListener(
  "input",
  _.debounce(async (event) => {
    const searchQuery = event.target.value.trim();
    if (!searchQuery) {
      renderCountries([]);
      return;
    }
    const countries = await fetchCountries(searchQuery);
    renderCountries(countries);
  }, 500)
);
