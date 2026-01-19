class FooterComponent extends HTMLElement {

    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

    }

    connectedCallback(){
        const style = document.createElement('style');
        style.textContent = `
            footer {
                background-color: #4C5045;
                color: white;
                padding: 10px 0;
                text-align: center;
            }

            .link {
                color: #FFD700;
                text-decoration: none;
            }

            .link:hover {
                text-decoration: underline;
            }
        `;
        this.shadow.appendChild(style);
        this.shadow.innerHTML += `<footer><p>© 2024 My Web Component <a class="link" href="#">Privacy Policy</a></p></footer>`;
    }

}

customElements.define('super-footer', FooterComponent);