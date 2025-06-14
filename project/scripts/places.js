import {santiagoPlaces} from '../data/places.mjs';

// Container
const placesContainer = document.querySelector('#places-Container'); // Make sure this matches your HTML
let savedPlaces = []; // Array to hold saved places

const savedFromStorage = localStorage.getItem('savedPlaces');
// Check if there are saved places in localStorage
if (savedFromStorage) {
  try {
    savedPlaces = JSON.parse(savedFromStorage);
  } catch (e) {
    savedPlaces = [];
  }
}

// Get all filter buttons
const allPlaces = document.querySelector('#all');
const history = document.querySelector('#history');
const nature = document.querySelector('#nature');
const culture = document.querySelector('#culture');
const food = document.querySelector('#food');
const museum = document.querySelector('#museum');
const restaurant = document.querySelector('#restaurant');
const viewpoint = document.querySelector('#viewpoint');
const nightlife = document.querySelector('#nightlife');
const shopping = document.querySelector('#shopping');
const landmark = document.querySelector('#landmark');
const government = document.querySelector('#government');

// Display all places initially
function displayPlaces(filteredPlaces = santiagoPlaces) {
  try {
    placesContainer.innerHTML = ''; // Clear container

    filteredPlaces.forEach(place => {
      const placeCard = document.createElement('div');
      placeCard.className = 'place-card';
      placeCard.dataset.categories = place.category.join(' ');
      const isSaved = savedPlaces.some(saved => saved.name === place.name);
      const buttonHTML = isSaved
      ? '<button id="removeButton" class="saveButton"><span>X</span></button>'
      : '<button id="savedButton" class="saveButton"><img src="images/save.svg"></button>';

      placeCard.innerHTML = `
        <div class="place-image" style="background-image: url('${place.image}')"></div>
        <div class="place-content">
          <div class="place-header">
            <h3>${place.name}</h3>
            <img src="${place.image}" width="200" alt="${place.name}" class="place-thumbnail">
          </div>
          <p class="location">📍<strong>Location: </strong> ${place.location}</p>
          <p class="description">📝<strong>Description: </strong> ${place.description}</p>
          <div class="categories">✅<strong>Categories:</strong>
            ${place.category.map(cat => `<span class="category-tag">${cat}</span>`).join(' ')}
          </div>
        </div>
        ${buttonHTML}
      `;

      placesContainer.appendChild(placeCard);
    });
  } catch (error) {
    console.error('Error displaying places:', error);
    placesContainer.innerHTML = '<p style="color:red;">Error loading places. Please try again later.</p>';
  }
}

console.log(santiagoPlaces);
placesContainer.addEventListener('click', function(event) {
  const saveBtn = event.target.closest('#savedButton');
  const removeBtn = event.target.closest('#removeButton');
  const card = event.target.closest('.place-card');

  if (saveBtn && !removeBtn && card) {
    // Guardar frase
    const place = card.querySelector('h3')?.textContent;
    if (!savedPlaces.some(saved => saved.place === place)) {
      // ...extrae info y guarda...
            if (saveBtn && !removeBtn && card) {
        // Guardar lugar completo
        const placeName = card.querySelector('h3')?.textContent;
        // Busca el objeto completo en santiagoPlaces
        const placeObj = santiagoPlaces.find(p => p.name === placeName);
        if (placeObj && !savedPlaces.some(saved => saved.name === placeObj.name)) {
          savedPlaces.push({ ...placeObj }); // Guarda toda la info del lugar
          displayPlaces(); // <-- Vuelve a renderizar

          // Save into localStorage
          try{
            localStorage.setItem('savedPlaces', JSON.stringify(savedPlaces));
            const localContent = localStorage.getItem('savedPlaces');
            console.log('lugares guardadas actualizadas:', localContent);
          } catch (error) {
            console.error('Error al guardar en localStorage:', error);
          }
        }
      }
      displayPlaces(); // <-- Vuelve a renderizar
    }
  }
    if (removeBtn && card) {
      // Eliminar lugar completo
      const place = card.querySelector('h3')?.textContent;
      savedPlaces = savedPlaces.filter(saved => saved.name !== place);
      displayPlaces(); // <-- Vuelve a renderizar
      // Save into localStorage
      try{
        localStorage.setItem('savedPlaces', JSON.stringify(savedPlaces));
        const localContent = localStorage.getItem('savedPlaces');
        console.log('lugares guardadas actualizadas:', localContent);
      } catch (error) {
        console.error('Error al guardar en localStorage:', error);
      }
  }
  console.log(savedPlaces);
});
// Filter places by category
function filterPlaces(category) {
  try {
    if (category === 'all') {
      displayPlaces();
      return;
    }

    const filtered = santiagoPlaces.filter(place =>
      place.category.includes(category)
    );
    displayPlaces(filtered);
  } catch (error) {
    console.error('Error filtering places:', error);
    placesContainer.innerHTML = '<p style="color:red;">Error filtering places. Please try again later.</p>';
  }
}

// Set active button
function setActiveButton(activeBtn) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  activeBtn.classList.add('active');
}

// Button event handlers
function setupButtonHandlers() {
  allPlaces.addEventListener('click', () => {
    filterPlaces('all');
    setActiveButton(allPlaces);
  });

  history.addEventListener('click', () => {
    filterPlaces('History');
    setActiveButton(history);
  });

  nature.addEventListener('click', () => {
    filterPlaces('Nature');
    setActiveButton(nature);
  });

  culture.addEventListener('click', () => {
    filterPlaces('Culture');
    setActiveButton(culture);
  });

  food.addEventListener('click', () => {
    filterPlaces('Food');
    setActiveButton(food);
  });

  museum.addEventListener('click', () => {
    filterPlaces('Museum');
    setActiveButton(museum);
  });

  restaurant.addEventListener('click', () => {
    filterPlaces('Restaurant');
    setActiveButton(restaurant);
  });

  viewpoint.addEventListener('click', () => {
    filterPlaces('Viewpoint');
    setActiveButton(viewpoint);
  });

  nightlife.addEventListener('click', () => {
    filterPlaces('Nightlife');
    setActiveButton(nightlife);
  });

  shopping.addEventListener('click', () => {
    filterPlaces('Shopping');
    setActiveButton(shopping);
  });

  landmark.addEventListener('click', () => {
    filterPlaces('Landmark');
    setActiveButton(landmark);
  });

  government.addEventListener('click', () => {
    filterPlaces('Government');
    setActiveButton(government);
  });
}

// Initialize the page
function init() {
  try {
    displayPlaces();
    setupButtonHandlers();
  } catch (error) {
    console.error('Error initializing page:', error);
    placesContainer.innerHTML = '<p style="color:red;">Error initializing the page. Please try again later.</p>';
  }
}

// Start the application
document.addEventListener('DOMContentLoaded', init);