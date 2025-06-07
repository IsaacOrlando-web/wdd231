import {places} from '../data/places.mjs';

function getPlaces(array) {
    array.forEach(place => {
        const placeElement = document.createElement('div');
        placeElement.className = 'place';

        placeElement.innerHTML = `
            <h2>${place.name}</h2>
            <img src="${place.image_url}" alt="${place.name}" width="600" 
            height="400"
            loading="lazy"
            decoding="async"
            class="place-image"
            style="aspect-ratio: 600/400; width: 100%; height: auto;">
            <address><strong>Address:</strong> ${place.address}</address>
            <p>${place.description}</p>
            <button>Learn More</button>
        `;

        document.getElementById('places').appendChild(placeElement);
    });
}

getPlaces(places);
displayLastVisit();

function displayLastVisit() {
    const sidebar = document.querySelector('.sidebar'); // or your specific sidebar selector
    if (!sidebar) return;
    
    const lastVisitKey = 'lastVisit';
    const currentVisit = new Date();
    const lastVisitValue = localStorage.getItem(lastVisitKey);
    
    let message;
    
    if (!lastVisitValue) {
        // First visit
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisit = new Date(lastVisitValue);
        const timeDiff = currentVisit - lastVisit;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        
        if (daysDiff === 0) {
            // Less than a day
            message = "Back so soon! Awesome!";
        } else {
            // One or more days
            message = `You last visited ${daysDiff} day${daysDiff === 1 ? '' : 's'} ago.`;
        }
    }
    let messageElement = document.getElementById('visit-message');
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.id = 'visit-message';
        messageElement.className = 'visit-message';
        sidebar.prepend(messageElement); // Add at the top of sidebar
    }
    
    messageElement.textContent = message;
    
    // Store the current visit date
    localStorage.setItem(lastVisitKey, currentVisit.toString());
}