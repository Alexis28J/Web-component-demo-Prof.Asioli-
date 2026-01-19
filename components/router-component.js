class RouterComponent extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {

        this.updateRoute();

        window.addEventListener('hashchange', () => this.updateRoute());



    }

    updateRoute() {
        const route = window.location.hash.slice(1) || 'home';

        if (route === 'home') {
            this.shadow.innerHTML = `<super-home></super-home>`;
        } else if (route === 'about') {
            this.shadow.innerHTML = `<super-about></super-about>`;
        } else if (route === 'contact') {
            this.shadow.innerHTML = `<super-contact></super-contact>`;
        } else {
            this.shadow.innerHTML = `<p>Page not found</p>`;
        }
    }

}



customElements.define('router-component', RouterComponent);