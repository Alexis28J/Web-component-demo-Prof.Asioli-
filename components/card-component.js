class CardComponent extends HTMLElement {

    static observedAttributes = ["card-title", "card-image", "card-description"];

    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){

    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadow.innerHTML = '';
        const style = document.createElement('style');
        style.textContent = `
            .card {
                border: 1px solid #ccc;
                border-radius: 8px;
                padding: 16px;
                max-width: 300px;
                font-family: Arial, sans-serif;
                min-width: 300px;
            }
            .card img {
                max-width: 100%;
                border-radius: 4px;
            }
            .card h2 {
                margin: 12px 0 8px 0;
                font-size: 1.5em;
            }
            .card p {
                color: #555;
            } 
        `;
        this.shadow.appendChild(style);
        this.shadow.innerHTML += `
        <div class="card">
            <img src="${this.getAttribute('card-image')}" alt="Card Image">
            <h2>${this.getAttribute('card-title')}</h2>
            <p>${this.getAttribute('card-description')}</p>
        </div>
        `;
    }

}

customElements.define('super-card', CardComponent);

