const BASE_URL = "https://localhost:7299/api";

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

export async function updateCharacter(id, character) {
    console.log(character);

    await fetch(`${BASE_URL}/Character/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(character)
    });
}

export async function getItem(id) {
    const response = await fetch(`${BASE_URL}/Item/${id}`, {
        method: 'GET'
    });
    return response.json();
}