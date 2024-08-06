import { organizace } from "../data.js"
function render() {

    const cardTemplate = document.querySelector("#card-template")
    const listOfOrganizations = document.querySelector(".cards")

    /**
     * @param {HTMLElement} cardElement 
     */
    function fillData(cardElement, oneOrganizationData) {

        const name = cardElement.querySelector("h3")
        name.textContent = oneOrganizationData.jmenoOrganizace

        const image = cardElement.querySelector("img")
        image.setAttribute("src", `../images/${oneOrganizationData.obrazek}`)

        const info = cardElement.querySelector(".info")
        info.textContent = oneOrganizationData.info
    }
    for (const oneOrganization of organizace) {
        const card = cardTemplate.content.cloneNode(true)

        fillData(card, oneOrganization)

        listOfOrganizations.appendChild(card)
    }
}

window.onload = render