const collections = document.querySelectorAll(".collection");

collections.forEach((collection) => {
  const searchInput = collection.querySelector(".search-input");
  const chips = collection.querySelectorAll(".filter-chip");
  const cards = collection.querySelectorAll(".card");

  let selectedPlace = "";

  function filterCards() {
    const search = searchInput.value.toLowerCase().trim();

    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      const place = card.dataset.place;

      const matchesSearch = text.includes(search);
      const matchesPlace = !selectedPlace || place === selectedPlace;

      card.style.display = matchesSearch && matchesPlace ? "" : "none";
    });
  }

  searchInput.addEventListener("input", filterCards);

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      selectedPlace = chip.dataset.place;

      chips.forEach((chip) => {
        chip.classList.remove("active");
      });

      chip.classList.add("active");

      filterCards();
    });
  });
});
