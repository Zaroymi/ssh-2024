import { addListItem, getAddButton } from './js/view/facts.js';

const addButton = getAddButton();
addButton?.addEventListener('click', () => addListItem());
