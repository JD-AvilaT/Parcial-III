import { ListaRecetas } from "../components/export";
import { Receta } from "../types/receta"
import { Actions, SomeActions } from "../types/store"
import firebase from "../utils/firebase"

export const saveReceta = async (receta: Receta):Promise<Actions>=>{
    await firebase.saveReceta(receta);
    return{
        action: SomeActions.SAVE_RECETA,
        payload: ListaRecetas,
    } 
}