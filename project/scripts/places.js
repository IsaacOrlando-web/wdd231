import {santiagoPlaces} from '../data/places.mjs';

// Container
const placesContainer = document.querySelector('#places-Container'); // Make sure this matches your HTML

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
  placesContainer.innerHTML = ''; // Clear container
  
  filteredPlaces.forEach(place => {
    const placeCard = document.createElement('div');
    placeCard.className = 'place-card';
    placeCard.dataset.categories = place.category.join(' ');
    
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
    `;
    
    placesContainer.appendChild(placeCard);
  });
}

// Filter places by category
function filterPlaces(category) {
  if (category === 'all') {
    displayPlaces();
    return;
  }
  
  const filtered = santiagoPlaces.filter(place => 
    place.category.includes(category)
  );
  displayPlaces(filtered);
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
  displayPlaces();
  setupButtonHandlers();
}

// Start the application
document.addEventListener('DOMContentLoaded', init);