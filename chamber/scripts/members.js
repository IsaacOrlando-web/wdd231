const membersContainer = document.querySelector('#members-container');
const url = './data/members.json';

async function getData() {
    // Espera a que la página esté lista
    document.addEventListener('DOMContentLoaded', async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Error al cargar los miembros');
            const data = await response.json();
            displayMembers(data.members);
        } catch (error) {
            console.error("Error:", error);
        }
    });
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
            <p>${member.address}</p>
            <p>${member.website}</p>
            <p>${member.email}</p>
        `;
        membersContainer.appendChild(card);
    });
};