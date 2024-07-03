import { vsechnySerie } from "./data.js";

// odchytává číslo serie z url vzor => (?cisloSerie=2)
const serieNumber = new URLSearchParams(window.location.search).get("cisloSerie")

// šablona jedne kartičky pro vykreslení/vypsání
const cardTemplate = document.querySelector("#card-template")

// vybrání kontejneru do kterého se vše zapíše
const listEpisodes = document.querySelector(".seznam-epizod")

// vybrání jedné serie (z pole data.js ) podle čísla z url
const selectedSerie = vsechnySerie.find(oneSerie => oneSerie.cisloSerie == serieNumber)


/**
 * funkce která doplní data do html elementu (karty/card)
 * 
 * @param {HTMLElement} cardEpisode karta dané epizody
 * @param {*} episodeData data o konkrétní epizodě
 */

function fillDataEpisode(cardEpisode, episodeData) {

    // vybere z jedné kartičky <span class="nazev-dilu-cz">{{nazevDilu}}</span> a nahradí jeho obsah
    const episodeNameCz = cardEpisode.querySelector(".nazev-dilu-cz")
    episodeNameCz.textContent = episodeData.nazevDilu.cz

    const episodeNameEn = cardEpisode.querySelector(".nazev-dilu-en")
    episodeNameEn.textContent = episodeData.nazevDilu.en

    const episodeNumber = cardEpisode.querySelector(".cislo-epizody")
    episodeNumber.textContent = episodeData.cisloDilu.epizoda

    const contentAbout = cardEpisode.querySelector(".popis-dilu-data")
    contentAbout.textContent = episodeData.popisDilu

}

// cyklus for který naklonuje šablonu tolikrát kolik je v dily objektu (epizod) , vyplní data do karty a vloží kartu do html (.seznam-epizod)
for (const episode of selectedSerie.dily) {

    // klonuje obsah šablony (kartu)
    const newCard = cardTemplate.content.cloneNode(true)

    // volá funkci která doplní data
    fillDataEpisode(newCard, episode)

    // vloží vyplněnou kartu do html
    listEpisodes.appendChild(newCard)

}