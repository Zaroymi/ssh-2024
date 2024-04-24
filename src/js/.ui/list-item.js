export class ListItem extends HTMLElement {
    static observedAttributes = ['name'];

    constructor() {
        super();
    }

    connectedCallback() {
        this.createStyles();
        this.addName();
        this.addButton();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(
            `Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
        );
    }


    createStyles() {
        this.style.display = 'flex';
        this.style.gap = '4px';
        this.style.height = '24px';
        this.style.fontSize = '14px';
        this.style.width = '1000px';
    }

    addName() {
        const pElem = document.createElement('span');
        pElem.innerText = this.getAttribute('name');
        this.appendChild(pElem);
    }

    addButton() {
        const button = document.createElement('list-item-button');
        this.appendChild(button);
        button.addEventListener('click', () => this.removeSelf());
    }

    removeSelf() {
        const event = new CustomEvent('remove');
        this.dispatchEvent(event); 
    }
}
