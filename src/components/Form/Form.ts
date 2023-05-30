import { dispatch } from "../../store";
import { saveReceta } from "../../store/actions";
import { Receta } from "../../types/receta";

const userInputs: Receta ={
    titulo: "",
    ingredientes: "",
    instrucciones: ""
}

export class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

        connectedCallback() {
        this.render()
    }

    render() {

        const titulo = this.ownerDocument.createElement('input');
        const lTitulo = this.ownerDocument.createElement('label');
        lTitulo.textContent = "titulo";
        titulo.addEventListener("change", (e: any) =>{
            console.log(e.target.value);
            userInputs.titulo = e.target.value;
        })
        this.shadowRoot?.appendChild(lTitulo);
        this.shadowRoot?.appendChild(titulo);

        const ingrediente = this.ownerDocument.createElement('input');
        const lIngrediente = this.ownerDocument.createElement('label');
        lIngrediente.textContent = "Ingrediente";
        ingrediente.addEventListener("change", (e: any) =>{
            console.log(e.target.value);
            userInputs.ingredientes = e.target.value;
        })
        this.shadowRoot?.appendChild(lIngrediente);
        this.shadowRoot?.appendChild(ingrediente);

        const instruccion = this.ownerDocument.createElement('input');
        const lInstruccion = this.ownerDocument.createElement('label');
        lInstruccion.textContent = "Instrucciones";
        instruccion.addEventListener("change", (e: any) =>{
            console.log(e.target.value);
            userInputs.instrucciones = e.target.value;
        })
        this.shadowRoot?.appendChild(lInstruccion);
        this.shadowRoot?.appendChild(instruccion);

        const btn = this.ownerDocument.createElement('button');
        btn.textContent = "Agregar Receta";
        btn.addEventListener("click", async () =>{
            console.log(userInputs);
            dispatch(await saveReceta(userInputs));
        })
        this.shadowRoot?.appendChild(btn);

        
    }
}

customElements.define('app-form', Form);
export default Form;