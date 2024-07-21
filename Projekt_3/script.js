const switcher = document.querySelector(".toggle-input")

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


const toggle = document.querySelector('.toggle-input');
const initialState = localStorage.getItem('toggleState') == 'true';
toggle.checked = initialState;

toggle.addEventListener('change', function () {
    localStorage.setItem('toggleState', toggle.checked);
});