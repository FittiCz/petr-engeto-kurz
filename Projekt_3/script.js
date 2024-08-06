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



const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');

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


const passwordInput = document.getElementById("pass")

// funkce která kontroluje sekvenci ASCII (abc,cde,567)
function isSequential(str) {
    let count = 0
    for (let i = 0; i < str.length - 1; i++) {
        if (str.charCodeAt(i) + 1 === str.charCodeAt(i + 1)) {
            //následující znak je v ASCII tabulce jako další v pořadí např a=97 b=98
            count++;
            if (count >= 2) {
                //sekvence tří a více znaků v ASCII -> abc , abcd, 1234
                return true;
            }
        } else {
            // pokud nebyly nalezeny tři znaky v sekvenci resetuji počítadlo
            count = 0;
        }
    }
    return false;
}

function hasRepeatingSequences(str) {
    // Kontrola opakování nejméně tří znaků
    let regex = /(\w{1,})\1\1/g;
    return regex.test(str);
}

function testPassword(password, input) {
    //min. jeden malý znak && min. jeden velký znak && speciální znak && číslo
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]_`{|}~\\])(?=.*[\d]).*$/g
    const validPassword = regex.test(password)
    console.log(password.length);

    if (password.length < 6) {
        input.setCustomValidity("Heslo musí mít nejméně 6 znaků")
        return false
    }
    if (!validPassword) {
        input.setCustomValidity("Heslo musí obsahovat: jedno malé písmeno, jedno velké písmeno, jeden speciální znak a jedno číslo")
        return false
    }

    if (isSequential(password)) {
        input.setCustomValidity("Heslo nesmí obsahovat sekvenci znaků")
        return false;
    }

    if (hasRepeatingSequences(password)) {
        input.setCustomValidity("Heslo nesmí obsahovat opakující se znaky")
        return false;
    }
    input.setCustomValidity("")
    return true;
}

passwordInput.addEventListener("input", () => {
    const passwordValue = passwordInput.value
    testPassword(passwordValue, passwordInput);
    passwordInput.reportValidity()
})

const userName = document.getElementById("username")
const userNameLabel = document.querySelector('[for="username"]')

userName.addEventListener("focusin", () => {
    userNameLabel.style.bottom = "100%"

})


userName.addEventListener("focusout", () => {

    if (userName.value.length === 0) {
        userNameLabel.style.bottom = "0"
    }
})

const password = document.getElementById("pass")
const passLabel = document.querySelector('[for="pass"]')

password.addEventListener("focusin", () => {
    passLabel.style.bottom = "100%"
})

password.addEventListener("focusout", () => {
    if (password.value.length === 0) {
        passLabel.style.bottom = "0"
    }
})

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // Kontrola, zda je element viditelný horizontálně i vertikálně
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return vertInView && horInView;
}

const anchor = document.getElementById("anchor")
const footer = document.querySelector("footer")

window.addEventListener("scroll", () => {
    if (window.scrollY >= 100 && !isInViewport(footer)) {
        anchor.style.display = "block";
    }
    else {
        anchor.style.display = "none";
    }
})
