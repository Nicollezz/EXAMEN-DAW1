import { createContext } from "react";
import { Receta } from "../modelos/Receta";

export const RecetaContext = createContext({
    recetas: [] as Receta[],
    setRecetas: (recetas: Receta[]) => { },
    agregarReceta: (receta: Receta) => { },
    eliminarReceta: (id: string) => { },
});