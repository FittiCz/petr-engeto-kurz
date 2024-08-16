const hamburgerIcon = document.querySelector(".open-menu-icon")
const closeMenuIcon = document.querySelector(".close-menu-icon")
const menuButtons = document.querySelector(".menu-buttons")
const menu = document.querySelector(".menu-items")

menuButtons.addEventListener('click', () => {
    if (menu.style.display === "flex") {
        menu.style.display = "none"
        hamburgerIcon.style.display = "block"
        closeMenuIcon.style.display = "none"
    } else {
        menu.style.display = "flex"
        hamburgerIcon.style.display = "none"
        closeMenuIcon.style.display = "block"

    }

})