const requestJSON = "js/partners.json";

fetch(requestJSON)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const grid = jsonObject["partners"];

    grid.forEach((item) => {
      let card = document.createElement("article");
      card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">

      <h4>${item.name}</h4>

      <h5 class="vertical-center"><span class="${item.icon}"></span> ${item.description}</h5>
      <div class="cta-container"><a href="${item.url}"> ${item.cta}
      <span class="icon">→</span>
      </a></div>
      `;
      document.querySelector("#grid").append(card);
    });
  });
