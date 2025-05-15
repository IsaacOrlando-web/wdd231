const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.getElementById('cards');

async function getData() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const sectionCard = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        const dateOfBirth = document.createElement("p");
        const placeOfBirth = document.createElement("p");
        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `${prophet.name} ${prophet.lastname} - ${prophet.order}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");
        sectionCard.appendChild(fullName);
        sectionCard.appendChild(dateOfBirth);
        sectionCard.appendChild(placeOfBirth);
        sectionCard.appendChild(portrait);
        cards.appendChild(sectionCard);
    });
}


getData();