import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import FormularioReceta from '../pages/FormularioReceta';
import ListaRecetas from '../pages/ListaRecetas';
import DetalleReceta from '../pages/DetalleReceta';
import { NavigationContainer } from '@react-navigation/native';

export default function NavegacionComponents() {
    const tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <tab.Navigator>
                <tab.Screen name="Inicio" component={Home} />
                <tab.Screen name="Agregar" component={FormularioReceta} />
                <tab.Screen name="Listado" component={ListaRecetas} />
                <tab.Screen name="Detalle" component={DetalleReceta} />
            </tab.Navigator>
        </NavigationContainer>
    )
}