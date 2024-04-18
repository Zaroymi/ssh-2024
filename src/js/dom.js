import { addFactToList } from "./bl.js";

export async function addListItem() {
    const newFacts = await addFactToList();
    const listElement = document.querySelector('.list');

    for (const child of Array.from(listElement.children)) {
        listElement?.removeChild(child);
    }

    for (const fact of newFacts) {
        const div = document.createElement('div');
        div.innerText = fact;
        listElement.appendChild(div);
    }
}

export function getAddButton() {
    const button = document.querySelector('#addButton');
    return button;
}