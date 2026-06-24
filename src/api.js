const BASE_URL = "http://localhost:5062/api";

// Character
export async function getCharacters() {
    const response = await fetch(`${BASE_URL}/Character`, {
        method: 'GET'
    });
    return response.json();
}

export async function getCharacter(id) {
    const response = await fetch(`${BASE_URL}/Character/${id}`, {
        method: 'GET'
    });
    return response.json();
}

export async function getNewestCharacter() {
    const response = await fetch(`${BASE_URL}/Character/new`, {
        method: 'GET'
    });
    return response.json();
}

export async function updateCharacter(id, character) {
    await fetch(`${BASE_URL}/Character/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(character)
    });
}

export async function createCharacter(character) {
    await fetch(`${BASE_URL}/Character`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(character)
    });
}

export async function deleteCharacter(id) {
    await fetch(`${BASE_URL}/Character/${id}`, {
        method: "DELETE"
    });
}

// Item
export async function getItem(id) {
    const response = await fetch(`${BASE_URL}/Item/${id}`, {
        method: 'GET'
    });
    return response.json();
}

export async function updateItem(id, item) {
    await fetch(`${BASE_URL}/Item/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    });
}

export async function deleteItem(id) {
    await fetch(`${BASE_URL}/Item/${id}`, {
        method: "DELETE"
    });
}

export async function createItem(characterId, item) {
    await fetch(`${BASE_URL}/Item/character/${characterId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    });
}

// Ability
export async function getAbility(id) {
    const response = await fetch(`${BASE_URL}/Ability/${id}`, {
        method: 'GET'
    });
    return response.json();
}

export async function updateAbility(id, ability) {
    await fetch(`${BASE_URL}/Ability/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ability)
    });
}

export async function deleteAbility(id) {
    await fetch(`${BASE_URL}/Ability/${id}`, {
        method: "DELETE"
    });
}

export async function createAbility(characterId, ability) {
    await fetch(`${BASE_URL}/Ability/character/${characterId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ability)
    });
}