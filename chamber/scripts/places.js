import {places} from '../data/places.mjs';

function getPlaces(array) {
    array.forEach(place => {
        const placeElement = document.createElement('div');
        placeElement.className = 'place';

        placeElement.innerHTML = `
            <h2>${place.name}</h2>
            <img src="${place.image_url}" alt="${place.name}">
            <address><strong>Address:</strong> ${place.address}</address>
            <p>${place.description}</p>
            <button>Learn More</button>
        `;

        document.getElementById('places').appendChild(placeElement);
    });
}

getPlaces(places);