const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#closemodal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

const redirectAfterClose = () => {
    window.location.href = "minhascampanhas.html"; // Substitua "sua-url-especifica.html" pela URL que deseja redirecionar
};

openModalButton.addEventListener("click", toggleModal);
closeModalButton.addEventListener("click", () => {
    toggleModal();
    redirectAfterClose(); // Redireciona o usuário após fechar o modal
});
fade.addEventListener("click", toggleModal);
