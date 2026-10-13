const languageToggle = document.getElementById("language-toggle");

let currentLanguage = "en";

languageToggle.addEventListener("click", function () {
    const newLanguage = currentLanguage === "en" ? "fa" : "en";

    document.documentElement.lang = newLanguage;
    document.documentElement.dir = newLanguage === "fa" ? "rtl" : "ltr";

    const translatableElements = document.querySelectorAll("[data-en][data-fa]");

    translatableElements.forEach(function (element) {
        element.textContent =
            newLanguage === "fa"
                ? element.dataset.fa
                : element.dataset.en;
    });

    languageToggle.textContent = newLanguage === "fa" ? "English" : "فارسی";

    currentLanguage = newLanguage;
});

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        menuCards.forEach(function (card) {
            const category = card.dataset.category;

            if (
                selectedFilter === "all" ||
                category === selectedFilter
            ) {
                card.hidden = false;
            } else {
                card.hidden = true;
            }
        });
    });
});
