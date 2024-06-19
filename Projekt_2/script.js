const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", () => {

    const isOpen = hamburger.classList.contains("open");
    const imageHamburger = hamburger.querySelector(".img1")
    const imageCancel = hamburger.querySelector(".img2")

    if (isOpen) {
        //zaviram menu
        hamburger.classList.remove("open")

        imageHamburger.style.setProperty("animation-name", "zobrazit")

        imageCancel.style.setProperty("animation-name", "skryt")
    }
    else {
        hamburger.classList.add("open")
    }
}
)