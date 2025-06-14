//got the containers
const phrasesContainer = document.getElementById('phrases-saved-container');
const placesContainer = document.getElementById('places-saved-container');

//Functions to get saved phrases and places from localStorage
function getSavedPhrases() {
    const phrases = localStorage.getItem('savedPhrases');
    return phrases;
}

function getSavedPlaces() {
    const places = localStorage.getItem('savedPlaces');
    return places;
}

//functions to display saved phrases and places into card
function displaySavedPhrases() {
    let savedPhrases = getSavedPhrases();
    if (savedPhrases) {
        savedPhrases = JSON.parse(savedPhrases);
        if (savedPhrases.length === 0) {
            phrasesContainer.innerHTML = '';
            const message = document.createElement('p');
            message.textContent = 'No saved phrases found.';
            phrasesContainer.appendChild(message);
            return;
        }
        savedPhrases.forEach(phrase => {
            const phraseCard = document.createElement('div');
            phraseCard.className = 'phrase-card';
            phraseCard.dataset.categories = phrase.usage.join(' ');
            const isSaved = savedPhrases.some(saved => saved.phrase === phrase.phrase);
            const buttonHTML = isSaved
              ? '<button id="removeButton" class="saveButton"><span>X</span></button>'
              : '<button id="savedButton" class="saveButton"><img src="images/save.svg"></button>';

            phraseCard.innerHTML = `
              <div class="phrase-header">
                <h3>${phrase.phrase}</h3>
                <span class="frequency-badge">${phrase.frequency}</span>
              </div>
              <p class="translation">${phrase.literalTranslation}</p>
              <p class="meaning">${phrase.meaning}</p>
              <div class="example">Example: ${phrase.example}</div>
              <div class="categories">
                ${phrase.usage.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
              </div>
              ${buttonHTML}
            `;

            phrasesContainer.appendChild(phraseCard);
        });
    } else {
        phrasesContainer.innerHTML = ''; // Clear previous content
        const message = document.createElement('p');
        message.textContent = 'No saved phrases found.';
        phrasesContainer.appendChild(message);
    }
}

function displaySavedPlaces() {
    let savedPlaces = getSavedPlaces();
    if (savedPlaces) {
        savedPlaces = JSON.parse(savedPlaces);
        if (savedPlaces.length === 0) {
            placesContainer.innerHTML = '';
            const message = document.createElement('p');
            message.textContent = 'No saved places found.';
            placesContainer.appendChild(message);
            return;
        }
        savedPlaces.forEach(place => {
            const placeCard = document.createElement('div');
            placeCard.className = 'place-card';
            placeCard.innerHTML = `
              <h3>${place.name}</h3>
              <p><strong>Desription:</strong> ${place.description}</p>
              <img src="${place.image}" alt="${place.name}">
              <p><strong>Location:</strong> ${place.location}</p>
              <button id="removeButton" class="saveButton"><span>X</span></button>
            `;
            placesContainer.appendChild(placeCard);
        });
    } else {
        placesContainer.innerHTML = ''; // Clear previous content
        const message = document.createElement('p');
        message.textContent = 'No saved places found.';
        placesContainer.appendChild(message);
    }
}

//Remove buttons functionality
phrasesContainer.addEventListener('click', function(event) {
  const removeBtn = event.target.closest('#removeButton');
  const card = event.target.closest('.phrase-card');

  if (removeBtn && card) {
    // Eliminar frase completa
    const phraseText = card.querySelector('h3')?.textContent;
    let savedPhrases = JSON.parse(getSavedPhrases()) || [];
    savedPhrases = savedPhrases.filter(saved => saved.phrase !== phraseText);
    location.reload(); //refresh the page
    console.log('Frase eliminada:', phraseText);
    console.log('Saved phrases after removal:', savedPhrases);

    // upload localStorage
    try{
        localStorage.setItem('savedPhrases', JSON.stringify(savedPhrases));
        const localContent = localStorage.getItem('savedPhrases');
      } catch (error) {
        console.error('Error al guardar en localStorage:', error);
      }
  }
});

placesContainer.addEventListener('click', function(event) {
    const removeBtn = event.target.closest('#removeButton');
    const card = event.target.closest('.place-card');
    
    if (removeBtn && card) {
        // Eliminar lugar completo
        const placeName = card.querySelector('h3')?.textContent;
        let savedPlaces = JSON.parse(getSavedPlaces()) || [];
        savedPlaces = savedPlaces.filter(saved => saved.name !== placeName);
        location.reload(); //refresh the page
        console.log('Lugar eliminado:', placeName);
        console.log('Saved places after removal:', savedPlaces);
    
        // upload localStorage
        try{
            localStorage.setItem('savedPlaces', JSON.stringify(savedPlaces));
            const localContent = localStorage.getItem('savedPlaces');
        } catch (error) {
            console.error('Error al guardar en localStorage:', error);
        }
    }
});

displaySavedPhrases();
displaySavedPlaces();