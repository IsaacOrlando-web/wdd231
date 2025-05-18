const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');
const lastModifiedElement = document.querySelector('#lastModification');
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.innerHTML = `Last Modified: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;
const membersContainer = document.querySelector('#members-container');
const url = '';

hamburgerElement.addEventListener('click', function() {
    hamburgerElement.classList.toggle('open');
    navElement.classList.toggle('open');
});

