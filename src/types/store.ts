import { Receta } from "./receta";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  recetas: Receta[];
};

export enum SomeActions {
  "SAVE_RECETA" = "SAVE_RECETA"
}

export interface SaveReceta {
  action: SomeActions.SAVE_RECETA;
  payload: Pick<AppState, "recetas">;
}

export type Actions = SaveReceta;
