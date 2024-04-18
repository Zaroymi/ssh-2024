import { getRandomFact } from "./backend-api.js";

const factsList = [];

export async function addFactToList() {
    const randomFact = await getRandomFact();
    factsList.push(randomFact);
    return [...factsList];
} 