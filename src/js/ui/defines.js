import { ListItemButton } from "./list-item-button.js";
import { ListItem } from "./list-item.js";

customElements.define('list-item-button', ListItemButton);
customElements.define('list-item', ListItem);


// const items = [...new Array(10)].forEach((_, index) => {
//     const list = document.querySelector('.list');
//     const item = document.createElement('list-item');
//     item.addEventListener('remove', event => {
//         list.removeChild(item);
//     });
//     item.setAttribute('name', 'Такое красивое имя') 
//     list.appendChild(item);
// })
