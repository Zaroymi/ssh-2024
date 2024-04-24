import { getRandomFact } from '../API/facts.js';

const factsList = [];

export function getFacts() {
    return [...factsList];
}

export async function addFactToList() {
    const randomFact = await getRandomFact();
    factsList.push(randomFact);
    return [...factsList];
}

export function removeFact(text) {

}