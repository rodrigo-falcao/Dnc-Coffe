const openModalBtn = document.querySelector("#openModal");
const modalClose = document.getElementById("modalClose");
const modal = document.querySelector("#modal2");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
}

fade.addEventListener("click", (event) => {
    if (event.target === fade) {
        toggleModal();
    }
});

modalClose.addEventListener("click", () => toggleModal());

openModalBtn.addEventListener("click", () => toggleModal());