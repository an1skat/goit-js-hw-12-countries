const renderCountries = (countries) => {
  const section = document.querySelector("section");
  section.innerHTML = "";

  if (countries.length > 10) {
    return PNotify.error({
      text: "Too many mathces found. Please enter a more specific query",
      delay: 1000,
    });
  }

  if (countries.length === 0) {
    section.innerHTML = `<p>No countries</p>`;
    return;
  }

  if (countries.length > 1) {
    const list = document.createElement("ul");

    countries.forEach((country) => {
      const item = document.createElement("li");
      item.innerHTML = `<p>${country.name}</p>`;
      list.appendChild(item);
    });

    section.appendChild(list);
  } else {
    const country = countries[0];
    const languages = country.languages.split(", ");

    const article = document.createElement("article");

    const titleElement = document.createElement("h2");
    titleElement.textContent = country.name;

    const container = document.createElement("div");
    container.className = "container";

    const infoList = document.createElement("ul");
    infoList.className = "list";

    const capitalItem = document.createElement("li");
    capitalItem.innerHTML = `<p><strong>Capital: </strong>${country.capital}</p>`;

    const populationItem = document.createElement("li");
    populationItem.innerHTML = `<p><strong>Population: </strong>${country.population}</p>`;

    const langList = document.createElement("ul");
    languages.forEach((lang) => {
      const langItem = document.createElement("li");
      langItem.innerHTML = `<p>${lang}</p>`;
      langList.appendChild(langItem);
    });

    const languagesItem = document.createElement("li");
    const p = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = "Languages: ";
    p.appendChild(strong);
    languagesItem.append(p, langList);

    infoList.append(capitalItem, populationItem, languagesItem);

    const img = document.createElement("img");
    img.src = country.flag;
    img.alt = `Flag of ${country.name}`;

    container.append(infoList, img);
    article.append(titleElement, container);
    section.appendChild(article);
  }
};

export default renderCountries;
