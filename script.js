const listMenu = document.querySelector(".mobile-menu-item");
document.querySelector(".icon").addEventListener("click", () => {
    listMenu.style.display = "flex"
})

listMenu.addEventListener("click", () => {
    listMenu.style.display = "none"
})
