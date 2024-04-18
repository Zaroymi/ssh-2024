import { addListItem, getAddButton } from './js/dom.js';

const addButton = getAddButton();
addButton?.addEventListener('click', () => addListItem());
