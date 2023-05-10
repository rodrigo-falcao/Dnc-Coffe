const card = document.querySelector(".card");
const cardBuy = document.querySelector("#cardBuy");

const toggleButton = () => {
    cardBuy.classList.toggle("show");
};

card.addEventListener("mouseenter", toggleButton);
card.addEventListener("mouseleave", toggleButton);