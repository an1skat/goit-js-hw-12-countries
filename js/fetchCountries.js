const fetchCountries = async (searchQuery) => {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${searchQuery}?fields=name,capital,population,languages,flags`
    );
    const data = await res.json();

    const countries = data.map((country) => ({
      name: country.name?.common || "No name",
      capital: country.capital?.[0] || "No capital",
      population: country.population
        ? country.population.toLocaleString()
        : "Unknown",
      languages: country.languages
        ? Object.values(country.languages).join(", ")
        : "No languages",
      flag: country.flags?.png || "No flag",
    }));

    console.log(countries);
    return countries;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default fetchCountries;
