import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { Receta } from '../modelos/Receta';
import { Plantilla } from '../modelos/Plantilla';
import { RecetaContext } from '../Contextos/RecetaContext';

export default function RecetaProvider({ children }: Plantilla) {

    const [recetas, setRecetas] = useState<Receta[]>([]);

    function agregarReceta(recetaParam: Receta) {
        setRecetas([...recetas, recetaParam]);
    }

    function eliminarReceta(id: string) {
        setRecetas(recetas.filter(receta => receta.id !== id));
    }

    return (
        <RecetaContext.Provider value={{ recetas, setRecetas, agregarReceta, eliminarReceta }}>
            {children}
        </RecetaContext.Provider>
    )
}

export const useRecetaContext = () => {
    return useContext(RecetaContext);
}