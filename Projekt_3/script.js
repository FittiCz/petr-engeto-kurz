const switcher = document.querySelector(".toggle input")

switcher.addEventListener("change", (event) => {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark")

    }
    else {
        document.documentElement.setAttribute("data-theme", "light")
    }
});


const toggle = document.querySelector('.toggle-input');
const initialState = localStorage.getItem('toggleState') == 'true';
toggle.checked = initialState;

toggle.addEventListener('change', function () {
    localStorage.setItem('toggleState', toggle.checked);
});