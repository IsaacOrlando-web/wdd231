//Genral Script, like the hamburger button, last modification and so On
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');
const lastModifiedElement = document.querySelector('#lastModification');
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.innerHTML = `Last Modified: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;

const currentYear = new Date().getFullYear();
const yearElement = document.querySelector('#CurrentYear');
yearElement.innerHTML = currentYear;

hamburgerElement.addEventListener('click', function() {
    hamburgerElement.classList.toggle('open');
    navElement.classList.toggle('open');
});