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
        document.body.style.backgroundColor = "#a6c1d6";
    }
    else {
        hamburger.classList.add("open")
        document.body.style.backgroundColor = "rgba(0,0,0,0.9)";
    }
}
)

