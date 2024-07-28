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

const heroSection = document.querySelector(".hero-section")
if (heroSection) {
    heroSection.addEventListener("click", otoc)
}

let uhel = 90
function otoc() {
    const hero = document.querySelector(".hero-section")
    hero.style.setProperty("--uhel", uhel + "deg")
    uhel += 90
}


const photo1 = document.querySelector(".photo1");
const photo2 = document.querySelector(".photo2");

if (photo1 && photo2) {
    photo1.addEventListener("mouseenter", () => {
        photo1.src = "../images/MattGroeningArt.png"
    });

    photo1.addEventListener("mouseleave", () => {
        photo1.src = "../images/Matt_Groening_by_Gage_Skidmore_2.jpg"
    });

    photo2.addEventListener("mouseenter", () => {
        photo2.src = "../images/David X. Cohen_art.png"
    });

    photo2.addEventListener("mouseleave", () => {
        photo2.src = "../images/David_X._Cohen_by_Gage_Skidmore_2.jpg"
    });
}

