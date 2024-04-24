import { addFactToList, getFacts, removeFact } from "../business-logic/facts.js";


export async function addListItem() {
    const newFacts = await addFactToList();
    redrawList(newFacts);
}

export function getAddButton() {
    const button = document.querySelector('#addButton');
    return button;
}

function redrawList(factsList) {
    const factsListElement = document.querySelector('.facts-list');

    for (const child of Array.from(factsListElement.children)) {
        factsListElement?.removeChild(child);
    }

    for (const fact of factsList) {
        const listItem = document.createElement('div');
        const removeButton = document.createElement('button');
        const textElement = document.createElement('span');
        listItem.classList.add('facts-list-item');

        textElement.innerText = fact;
        listItem.appendChild(textElement);
        listItem.appendChild(removeButton);
        factsListElement.appendChild(listItem);

        removeButton.innerHTML = 'Удалить'
        removeButton.addEventListener('click', () => {
            removeFact(fact);
            const newFacts = getFacts();
            redrawList(newFacts);
        });
    }
}