import { postavy } from "../data.js"
function render() {


    const cardTemplate = document.querySelector("#card-template")
    const listOfCharacters = document.querySelector(".cards")

    /**
     * @param {HTMLElement} cardElement 
     */
    function fillData(cardElement, oneCharacterData) {

        const name = cardElement.querySelector("h3")
        name.textContent = oneCharacterData.jmenoPostavy

        const image = cardElement.querySelector(".imgBox img")
        image.setAttribute("src", `../images/${oneCharacterData.obrazek}`)

        const bio = cardElement.querySelector(".bio")
        bio.textContent = oneCharacterData.bio
    }


    for (const oneCharacter of postavy) {
        const card = cardTemplate.content.cloneNode(true)

        fillData(card, oneCharacter)

        listOfCharacters.appendChild(card)
    }
}

window.onload = render