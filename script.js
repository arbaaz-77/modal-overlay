const overlay = document.getElementById("overlay")
const closeModal = document.getElementById("close-modal")
const openModal = document.getElementById("open-modal")


openModal.addEventListener('click', () => overlay.style.display = "block")

closeModal.addEventListener('click', () => overlay.style.display = "none")