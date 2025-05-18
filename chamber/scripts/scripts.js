const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');
const lastModifiedElement = document.querySelector('#lastModification');
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.innerHTML = `Last Modified: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;

const membersContainer = document.querySelector('#members-container');
const url = './data/members.json';

const currentYear = new Date().getFullYear();
const yearElement = document.querySelector('#CurrentYear');
yearElement.innerHTML = currentYear;

hamburgerElement.addEventListener('click', function() {
    hamburgerElement.classList.toggle('open');
    navElement.classList.toggle('open');
});

async function getData() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
getData();

const displayMembers = (members) => {
    members.forEach(member => {
        const card = document.createElement('section');
        const h2 = document.createElement('h2');
        const image = document.createElement('img');
        const phone = document.createElement('p');
        const address = document.createElement('p');
        const website = document.createElement('p');
        const email = document.createElement('p');

        h2.textContent = `${member.name}`;
        phone.textContent = `Phone: ${member.phone}`;
        address.textContent = member.address;
        website.textContent = member.website;
        email.textContent = member.email;
        card.setAttribute('class', 'member-card');
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `${member.name} - ${member.title}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');
        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(email);
        membersContainer.appendChild(card);


    });
}