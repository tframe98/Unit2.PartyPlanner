const API_BASE_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/YOUR_COHORT_NAME';

async function fetchParties() {
    try {
        const response = await fetch(`${API_BASE_URL}/events`);
        const result = await response.json();
        if (result.success && result.data) {
            displayParties(result.data);
        } else {
            console.error('Failed to fetch parties:', result.error);
        }
    } catch (error) {
        console.error('Error fetching parties:', error);
    }
}

function displayParties(parties) {
    const partyList = document.getElementById('partyList');
    partyList.innerHTML = ''; // Clear existing parties
    parties.forEach(party => {
        const partyElement = document.createElement('div');
        partyElement.innerHTML = `
            <h3>${party.name}</h3>
            <p>${party.description}</p>
            <p>Date: ${new Date(party.date).toLocaleDateString()}</p>
            <p>Location: ${party.location}</p>
            <button onclick="deleteParty(${party.id})">Delete</button>
        `;
        partyList.appendChild(partyElement);
    });
}
