//display two or three members
//member must be gold or silver members
//randomly load 'spotlights' each time the page is rendered
//display their company name, logo, phone, address, website, and membership level.

const membersContainer = document.querySelector('.spotlights-container');
const url = './data/members.json';

async function getData() {
    // Espera a que la página esté lista
    document.addEventListener('DOMContentLoaded', async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Error al cargar los miembros');
            const data = await response.json();
            displayMembers(bestMembersRandom(data.members));
        } catch (error) {
            console.error("Error:", error);
        }
    });
}

//Función que filtre los miembros, solo los que tengan membership 3 y los devuelva en un array random.
function bestMembersRandom(members) {
    // Filtra los miembros con membershipLevel 3
    const result = members.filter((member) => member.membershipLevel === 3 );
    // Mezcla el array y toma solo 3 al azar
    const shuffled = result.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

getData();

const displayMembers = (members) => {
    members.forEach(member => {
        const card = document.createElement('section');
        card.className = 'member-card';
        card.innerHTML = `
            <h2>${member.name}</h2>
            <img src="${member.image}" loading="lazy" width="340" height="440">
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <p>Website: ${member.website}</p>
            <p>Membership Level: ${member.membershipLevel}</p>
        `;
        membersContainer.appendChild(card);
    });
};