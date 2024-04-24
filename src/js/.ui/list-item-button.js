export class ListItemButton extends HTMLElement {
    static observedAttributes = [];

    constructor() {
        super();
    }

    connectedCallback() {
        const button = document.createElement('button');
        button.innerText = 'Удалить';
        this.appendChild(button);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(
            `Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
        );
    }
}
