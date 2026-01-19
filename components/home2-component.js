import { YugiService } from "../services/yugi-service.js"; 

class Home2Component extends HTMLElement {

    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        console.log('connected')

        const style = document.createElement('style');
        style.innerHTML = `
            .card-container{
                display:flex;
                justify-content:center;
            }
        `
        this.shadow.appendChild(style);
        const service = new YugiService();
        service.fetchCards().then(cards => this.displayCards(cards))
    }

    displayCards(cards){
        console.log(cards);
        const container = document.createElement('div');
        container.classList.add('card-container');

        const backBtn = document.createElement('button');
        backBtn.innerHTML = 'back';
        backBtn.addEventListener('click', () => {
            index--;
            selectedCard = cards[index]
            title = selectedCard.name.replaceAll('"', '');
            description = selectedCard.desc.replaceAll('"', '');
            imageUrl = selectedCard.card_images[0].image_url;
            superCard.setAttribute('card-title', title)
            superCard.setAttribute("card-description", description);
            superCard.setAttribute("card-image", imageUrl)
        })
        container.appendChild(backBtn);

        let index = 0;
        let selectedCard = cards[index]

        let title = selectedCard.name.replaceAll('"', '');
        let description = selectedCard.desc.replaceAll('"', '');
        let imageUrl = selectedCard.card_images[0].image_url;

        let superCard = document.createElement('super-card');
        superCard.setAttribute('card-title', title)
        superCard.setAttribute("card-description", description);
        superCard.setAttribute("card-image", imageUrl)

        container.appendChild(superCard);


        const forwardBtn = document.createElement('button');
        forwardBtn.innerHTML = 'forward';
        forwardBtn.addEventListener('click', () => {
            index++;
            selectedCard = cards[index]
            title = selectedCard.name.replaceAll('"', '');
            description = selectedCard.desc.replaceAll('"', '');
            imageUrl = selectedCard.card_images[0].image_url;
            superCard.setAttribute('card-title', title)
            superCard.setAttribute("card-description", description);
            superCard.setAttribute("card-image", imageUrl)
        })
        container.appendChild(forwardBtn);


        this.shadow.appendChild(container);
    }

}

customElements.define('super-home-2', Home2Component);