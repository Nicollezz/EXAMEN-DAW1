import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import FormularioReceta from '../pages/FormularioReceta';
import ListaRecetas from '../pages/ListaRecetas';
import DetalleReceta from '../pages/DetalleReceta';
import { NavigationContainer } from '@react-navigation/native';

export default function NavegacionDrawerComponents() {
    const drawer = createDrawerNavigator();
    
    return (
        <NavigationContainer>
            <drawer.Navigator>
                <drawer.Screen name="Inicio" component={Home} />
                <drawer.Screen name="Agregar Receta" component={FormularioReceta} />
                <drawer.Screen name="Lista de Recetas" component={ListaRecetas} />
                <drawer.Screen name="Detalle Receta" component={DetalleReceta} />
            </drawer.Navigator>
        </NavigationContainer>
    )
}