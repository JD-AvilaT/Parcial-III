import "./components/export";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        const form = this.ownerDocument.createElement('app-form');
        const lista = this.ownerDocument.createElement('lista-recetas');
        
        this.shadowRoot?.appendChild(form);
        this.shadowRoot?.appendChild(lista);
    }
}

customElements.define('app-container', AppContainer)