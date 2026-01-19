import { YugiService } from "../services/yugi-service.js"; 

class HomeComponent extends HTMLElement {

    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){



        const style = document.createElement('style');
        style.textContent = `
            .card-container {
                display: flex;
                max-width: 100vw;
                overflow-x: auto;
            }
        `;
        this.shadow.appendChild(style);

        const container = document.createElement('div');
        container.classList.add('card-container');

        const service = new YugiService();
        service.fetchCards().then(data => {
            for (const card of data) {
                const title = card.name.replaceAll('"', "");
                const description = card.desc.replaceAll('"', "");
                const imageUrl = card.card_images[0].image_url;
                console.log(title, description, imageUrl);
                container.innerHTML += `<super-card card-title="${title}" card-description="${description}" card-image="${imageUrl}"></super-card>`;
            }
        });
        this.shadow.appendChild(container);
    }

}

customElements.define('super-home', HomeComponent);