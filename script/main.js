const openModalBtl = document.querySelector("#openModal");
const closeModalbtl = document.querySelector("#modalClose");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[openModalBtl, closeModalbtl, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});
