class ContactComponent extends HTMLElement {

    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        const style = document.createElement('style');
        style.textContent = `
            main {
                padding: 20px;
                font-family: Arial, sans-serif;
            }
            h2 {
                color: #333;
            }
            p {
                line-height: 1.6;
            }
        `;
        this.shadow.appendChild(style);
        this.shadow.innerHTML += `
        <main>
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out!</p>
        </main>`;
    }

}

customElements.define('super-contact', ContactComponent);