import { appState } from "../../store";
import firebase from "../../utils/firebase";

class ListaRecetas extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        if(this.shadowRoot) this.shadowRoot.innerHTML="";

        appState.recetas.forEach((r) => {
            const rContainer = this.ownerDocument.createElement('article');
            const rTitulo = this.ownerDocument.createElement('h3');
            rTitulo.textContent = r.titulo;
            
            const ringredientes = this.ownerDocument.createElement('p');
            ringredientes.textContent = r.ingredientes;
            const rinstrucciones = this.ownerDocument.createElement('p');
            rinstrucciones.textContent = r.instrucciones;

            rContainer?.appendChild(rTitulo);
            rContainer?.appendChild(ringredientes);
            rContainer?.appendChild(rinstrucciones);
            this.shadowRoot?.appendChild(rContainer);
            
        })
    }
}

customElements.define('lista-recetas', ListaRecetas);

export default ListaRecetas;