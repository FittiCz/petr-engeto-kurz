import { vsechnySerie } from "./data.js"

const cardTemplate = document.querySelector("#card-template")
const listSeries = document.querySelector(".series .flex-box")

/**
 * 
 * @param {HTMLElement} cardElement 
 */

function fillData(cardElement, cardData) {

    const image = cardElement.querySelector(".imgBox img")
    image.setAttribute("src", `../images/${cardData.obrazek}`)

    const serieNumber = cardElement.querySelector(".cislo-serie")
    serieNumber.textContent = cardData.cisloSerie

    const releaseYear = cardElement.querySelector(".rok-vydani-hodnota")
    releaseYear.textContent = cardData.rokVydani

    const durationHours = cardElement.querySelector(".stopaz-h")
    durationHours.textContent = cardData.celkovaStopaz.hodiny

    const durationMinutes = cardElement.querySelector(".stopaz-min")
    durationMinutes.textContent = cardData.celkovaStopaz.minuty

    const link = cardElement.querySelector(".link")
    link.setAttribute("href", `/pages/episody.html?cisloSerie=${cardData.cisloSerie}`)

}

for (const oneSerie of vsechnySerie) {
    const card = cardTemplate.content.cloneNode(true)

    fillData(card, oneSerie)

    listSeries.appendChild(card)
}
