import {phrases} from '../data/wordsPhrases.mjs';
import {santiagoPlaces} from '../data/places.mjs';
const phrasesContainer = document.querySelector('#featured-Phrases');
const placesContainer = document.querySelector('#featured-Places');

const results = phrases.filter(phrase => phrase.frequency === "veryCommon");
const places =  santiagoPlaces.filter(place => place.popularity === "very high");

// Function to show a dialog with content
function showDialog(content) {
    const dialog = document.createElement('div');
    dialog.className = 'dialog-overlay';
    dialog.innerHTML = `
        <div class="dialog-content">
            <button class="close-dialog">&times;</button>
            ${content}
        </div>
    `;
    document.body.appendChild(dialog);
    
    // Cerrar diálogo
    dialog.querySelector('.close-dialog').addEventListener('click', () => {
        document.body.removeChild(dialog);
    });
    
    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
            document.body.removeChild(dialog);
        }
    });
}

//Creates tarjets
function createPhraseCards() {
    results.forEach(phrase => {
        const card = document.createElement('div');
        card.className = 'phrase-card';
        card.innerHTML = `
            <h3>${phrase.phrase}</h3>
            <p><strong>Frequency:</strong> ${phrase.frequency}</p>
            <p><strong>Meaning:</strong> ${phrase.meaning}</p>
            <button class="card-button" id="card-button-phrase">Learn More</button>
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
            <button class="card-button" data-id="${place.id}">Learn More</button>
        `;
        placesContainer.appendChild(card);
    });
}

function addPhraseButtonListeners() {
    const buttons = document.querySelectorAll('#featured-Phrases .card-button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = 'sentences.html';
        });
    });
}

function addPlaceButtonListeners() {
    const buttons = document.querySelectorAll('#featured-Places .card-button');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const placeId = e.target.getAttribute('data-id');
            const place = places.find(p => p.id === placeId);
            
            if (place) {
                const dialogContent = `
                    <h2>${place.name}</h2>
                    <img src="${place.image}" alt="${place.name}" style="max-width: 100%; height: auto; margin: 15px 0;">
                    <div class="dialog-description">
                        <h3>Detailed Description</h3>
                        <p>${place.long_description}</p>
                    </div>
                    <div class="dialog-details">
                        <p><strong>Location:</strong> ${place.location}</p>
                        <p><strong>Categories:</strong> ${place.category.join(', ')}</p>
                    </div>
                `;
                showDialog(dialogContent);
            }
        });
    });
}

// Call the function to create cards
createPhraseCards();
createPlaceCards();
addPlaceButtonListeners();
addPhraseButtonListeners();