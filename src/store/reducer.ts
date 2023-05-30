import { SomeActions } from "../types/store";
import { Actions, AppState } from "../types/store";

export const reducer = (actions: Actions, state: AppState) =>{
    const{action, payload} = actions;

    switch (action) {
        case SomeActions.SAVE_RECETA:
            state.recetas = [...state.recetas, payload];
            return state;
    
        default:
            return state;
    }
}