import {phrases} from '../data/wordsPhrases.mjs';
import {santiagoPlaces} from '../data/places.mjs';
const phrasesContainer = document.querySelector('#featured-Phrases');
const placesContainer = document.querySelector('#featured-Places');

const results = phrases.filter(phrase => phrase.frequency === "veryCommon");
const places =  santiagoPlaces.filter(place => place.popularity === "very high");

//Creates tarjets
function createPhraseCards() {
    results.forEach(phrase => {
        const card = document.createElement('div');
        card.className = 'phrase-card';
        card.innerHTML = `
            <h3>${phrase.phrase}</h3>
            <p><strong>Frequency:</strong> ${phrase.frequency}</p>
            <p><strong>Meaning:</strong> ${phrase.meaning}</p>
            <button id="card-button">Learn More</button>
        `;
        phrasesContainer.appendChild(card);
    });
}

function createPlaceCards() {
    places.forEach(place => {
        const card = document.createElement('div');
        card.className = 'place-card';
        card.innerHTML = `
            <h3>${place.name}</h3>
            <img src="${place.image}" alt="${place.name}" />
            <p><strong>Description:</strong> ${place.description}</p>
            <p><strong>Location:</strong> ${place.location}</p>
            <p><strong>Category:</strong> ${place.category.join(', ')}</p>
            <button id="card-button">Learn More</button>
        `;
        placesContainer.appendChild(card);
    });
}

// Call the function to create cards
createPhraseCards();
createPlaceCards();