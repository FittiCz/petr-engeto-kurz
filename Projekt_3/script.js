// const switcher = document.querySelector(".toggle-input")

// switcher.addEventListener("change", switchTheme)

// function switchTheme(event) {
//     const isLightMode = !event.target.checked

//     if (isLightMode) {
//         document.documentElement.setAttribute("data-theme", "light")

//     }
//     else {
//         document.documentElement.setAttribute("data-theme", "dark")
//     }
// }


// const toggle = document.querySelector('.toggle-input');
// const initialState = localStorage.getItem('toggleState') == 'true';
// toggle.checked = initialState;

// toggle.addEventListener('change', function () {
//     localStorage.setItem('toggleState', toggle.checked);
// });

const header = document.querySelector('header')
const hamburger = document.querySelector(".hamburger")
const menuItems = document.querySelector(".menu-items-wrapper")
const hero = document.querySelector(".hero")

hamburger.addEventListener("click", toggleMenu)

function toggleMenu() {
    const menuIsOpen = header.classList.contains("open")
    if (menuIsOpen == false) {
        header.classList.add("open")
        menuItems.style.transform = "translateY(0%)"
        hero.style.marginTop = menuItems.offsetHeight + "px"
    }
    else {
        header.classList.remove("open")
        menuItems.style.transform = "translateY(-100%)"
        hero.style.marginTop = "0px"
    }
}

const anchor = document.getElementById("anchor")
console.log(anchor);

window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        anchor.style.display = "block";
    }
    else {
        anchor.style.display = "none";
    }
})

const inputs = document.querySelectorAll('input[type="text"], input[type="email"]');

inputs.forEach(input => {
    input.addEventListener('input', function () {
        if (this.value) {
            this.classList.add('filled');
        } else {
            this.classList.remove('filled');
        }
    });

    input.addEventListener('change', function () {
        if (this.value) {
            this.classList.add('filled');
        } else {
            this.classList.remove('filled');
        }
        console.log("bjlskjds");
    });

    // kontrola stavu při načtení stránky
    if (input.value) {
        input.classList.add('filled');
    }
});
