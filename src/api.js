const BASE_URL = "https://localhost:7299/api";

export async function getCharacters() {
    const response = await fetch(`${BASE_URL}/Character`);
    return response.json();
}