import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Home({ navigation }: any) {
    return (
        <View style={estilos.contenedor}>

              <Text style={estilos.titulo}>Mis Recetas Favoritas</Text>
            <Image 
                source={require('../assets/flan.jpg')} 
                style={estilos.imagen} 
            />
          
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedor: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    imagen: {
        width: 300,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#ddd'
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        textAlign: 'center'
    },
});