import { View, Text, FlatList, StyleSheet, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { useRecetaContext } from '../Providers/RecetaProvider'

export default function ListaRecetas() {

    const { recetas, eliminarReceta } = useRecetaContext();
    const [nroBusqueda, setNroBusqueda] = useState('');

    
    function buscarRecetaPorNumero() {
        const encontrada = recetas.find((item, index) => (index + 1).toString() === nroBusqueda || item.id === nroBusqueda);
        
        if (encontrada) {
            Alert.alert('Receta Encontrada', `Nombre: ${encontrada.nombre}\nIngredientes: ${encontrada.ingredientes.join(', ')}`);
        } else {
            Alert.alert('No encontrada', 'No existe ninguna receta con ese número o ID.');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Recetas</Text>

            <View style={styles.searchContainer}>
                <TextInput 
                    placeholder='Ingrese Numero Receta'
                    value={nroBusqueda}
                    onChangeText={setNroBusqueda}
                    style={styles.inputSearch}
                />
                <Button title='Buscar' onPress={buscarRecetaPorNumero} />
            </View>

       
            <FlatList
                data={recetas}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <View style={styles.card}>
                        <Text style={styles.textBold}>Receta #{index + 1}</Text>
                        <Text>Nombre: {item.nombre}</Text>
                        <Text>Ingredientes: {item.ingredientes.join(', ')}</Text>
                        <Text>Fecha: {item.fecha}</Text>
                        
                        <View style={{ marginTop: 8 }}>
                            <Button 
                                title='Eliminar' 
                                color='red' 
                                onPress={() => eliminarReceta(item.id)} 
                            />
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputSearch: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginRight: 10,
        width: 170,
        borderRadius: 5,
        backgroundColor: '#fafafa'
    },
    card: {
        backgroundColor: '#f9f9f9',
        padding: 12,
        marginVertical: 6,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#eee'
    },
    textBold: {
        fontWeight: 'bold',
        marginBottom: 2
    }
})