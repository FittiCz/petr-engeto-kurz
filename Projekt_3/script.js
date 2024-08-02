const switcher = document.querySelector(".bb8-toggle__checkbox")

switcher.addEventListener("change", switchTheme)

function switchTheme(event) {
    const isLightMode = !event.target.checked
    if (isLightMode) {
        document.documentElement.setAttribute("data-theme", "light")
    }
    else {
        document.documentElement.setAttribute("data-theme", "dark")
    }
}


const toggle = document.querySelector('.bb8-toggle__checkbox');
const initialState = localStorage.getItem('toggleState') == 'true';
toggle.checked = initialState;

switchTheme(
    {
        target: {
            checked: initialState
        }
    }
)

// uložení motivu 
toggle.addEventListener('change', function () {
    localStorage.setItem('toggleState', toggle.checked);
});

const header = document.querySelector('header')
const hamburger = document.querySelector(".hamburger")
const menuItems = document.querySelector(".menu-items-wrapper")
const hero = document.querySelector(".hero")

hamburger.addEventListener("click", toggleMenu)

function toggleMenu() {
    console.log("test");
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


function testEmail(email) {
    const regex = /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/gm
    const validEmail = regex.test(email)
    return validEmail
}

const emailInput = document.getElementById("email")
const emailControlInput = document.getElementById("email-check")
const emailError = document.querySelector(".email-error")
const emailRegexError = document.querySelector(".email-regex-error")

emailInput.addEventListener("input", () => {
    const emailValue = emailInput.value
    const isValid = testEmail(emailValue)
    if (emailValue === "") {
        emailRegexError.style.display = "none"
        return
    }
    if (isValid) {
        console.log("yes");
        emailRegexError.style.display = "none"
    } else {
        console.log("No");
        emailRegexError.style.display = "block"
    }
})

function compareEmails() {
    const email1 = emailInput.value
    const email2 = emailControlInput.value
    console.log("hodnota:" + email2);
    if (email2 === "") {
        emailInput.style.border = "none"
        emailControlInput.style.border = "none"
        emailError.style.display = "none"
        return
    }
    if (email1 === email2) {
        emailInput.style.border = "4px solid green"
        emailControlInput.style.border = "4px solid green"
        emailError.style.display = "none"
    } else {
        console.log("mismatch");
        emailInput.style.border = "4px solid red"
        emailControlInput.style.border = "4px solid red"
        emailError.style.display = "block"
    }
}

emailInput.addEventListener("input", compareEmails)

emailControlInput.addEventListener("input", compareEmails)





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
    });

    // kontrola stavu při načtení stránky
    if (input.value) {
        input.classList.add('filled');
    }
});


const anchor = document.getElementById("anchor")

window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        anchor.style.display = "block";
    }
    else {
        anchor.style.display = "none";
    }
})
