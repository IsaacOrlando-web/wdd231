const hamburger = document.getElementById('myButton');
const navMenu = document.querySelector('.nav-menu');
const viewPhrasesBtn = document.getElementById('buttonPhrases');
const viewPlacesBtn = document.getElementById('buttonPlaces');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
})

//button to direct to sentences.html
viewPhrasesBtn.addEventListener('click', () => {
    window.location.href = 'sentences.html';
});

//button to direct to places.html
viewPlacesBtn.addEventListener('click', () => {
    window.location.href = 'places.html';
});