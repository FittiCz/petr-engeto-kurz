import { vsechnySerie } from "../data.js"
function render() {

    const cardTemplate = document.querySelector("#card-template")
    const listSeries = document.querySelector(".series .container")

    /**
     * 
     * @param {HTMLElement} cardElement 
     */

    function fillData(cardElement, cardData) {

        const image = cardElement.querySelector(".imgBox img")
        image.setAttribute("src", `../images/season${cardData.cisloSerie}.webp`)

        const serieNumber = cardElement.querySelector(".cislo-serie")
        serieNumber.textContent = cardData.cisloSerie

        const releaseYear = cardElement.querySelector(".rok-vydani-hodnota")
        releaseYear.textContent = cardData.rokSerie

        const durationHours = cardElement.querySelector(".stopaz-h")
        durationHours.textContent = cardData.delkaSerie.hodiny

        const durationMinutes = cardElement.querySelector(".stopaz-min")
        durationMinutes.textContent = cardData.delkaSerie.minuty

        const link = cardElement.querySelector(".link")
        link.setAttribute("href", `epizody.html?cisloSerie=${cardData.cisloSerie}`)

    }

    for (const oneSerie of vsechnySerie) {
        const card = cardTemplate.content.cloneNode(true)

        fillData(card, oneSerie)

        listSeries.appendChild(card)
    }
}

window.onload = render