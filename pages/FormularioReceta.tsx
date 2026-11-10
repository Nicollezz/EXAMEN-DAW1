import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useRecetaContext } from '../Providers/RecetaProvider';

export default function FormularioReceta() {
    const { agregarReceta } = useRecetaContext();

    const [nombreReceta, setNombreReceta] = useState('');
    const [ingrediente1, setIngrediente1] = useState('');
    const [ingrediente2, setIngrediente2] = useState('');
    const [ingrediente3, setIngrediente3] = useState('');
    const [ingrediente4, setIngrediente4] = useState('');
    const [ingrediente5, setIngrediente5] = useState('');
    const [fechaCreacion, setFechaCreacion] = useState(new Date().toLocaleDateString());

    const registrarReceta = () => {
        if (!nombreReceta.trim()) {
            Alert.alert('Atención', 'Por favor ingresa el nombre de la receta.');
            return;
        }

        const listadoIngredientes = [
            ingrediente1,
            ingrediente2,
            ingrediente3,
            ingrediente4,
            ingrediente5
        ].filter(item => item.trim() !== '');

        if (listadoIngredientes.length === 0) {
            Alert.alert('Atención', 'Por favor ingresa al menos un ingrediente.');
            return;
        }

        const fechaFinal = fechaCreacion.trim() !== '' ? fechaCreacion : new Date().toLocaleDateString();

        const nuevaRecetaObj = {
            id: Date.now().toString(),
            nombre: nombreReceta,
            ingredientes: listadoIngredientes,
            fecha: fechaFinal,
        };

        agregarReceta(nuevaRecetaObj);

        setNombreReceta('');
        setIngrediente1('');
        setIngrediente2('');
        setIngrediente3('');
        setIngrediente4('');
        setIngrediente5('');
        setFechaCreacion(new Date().toLocaleDateString());

        Alert.alert('Éxito', 'La receta se ha registrado correctamente.');
    };

    return (
        <View style={estilos.contenedor}>
            <Text style={estilos.titulo}>Nueva Receta</Text>

            <TextInput 
                style={estilos.input}
                placeholder="Ej. Pastel de chocolate"
                placeholderTextColor="#999"
                value={nombreReceta}
                onChangeText={setNombreReceta}
            />

            <Text style={estilos.subtitulo}>Ingredientes:</Text>
            
            <TextInput style={estilos.inputIngrediente} placeholder="Ej. 2 tazas de harina" placeholderTextColor="#aaa" value={ingrediente1} onChangeText={setIngrediente1} />
            <TextInput style={estilos.inputIngrediente} placeholder="Ej. 1 taza de azúcar" placeholderTextColor="#aaa" value={ingrediente2} onChangeText={setIngrediente2} />
            <TextInput style={estilos.inputIngrediente} placeholder="Ej. 3 huevos" placeholderTextColor="#aaa" value={ingrediente3} onChangeText={setIngrediente3} />
            <TextInput style={estilos.inputIngrediente} placeholder="Ej. 1/2 taza de leche" placeholderTextColor="#aaa" value={ingrediente4} onChangeText={setIngrediente4} />
            <TextInput style={estilos.inputIngrediente} placeholder="Ej. 1 cucharada de vainilla" placeholderTextColor="#aaa" value={ingrediente5} onChangeText={setIngrediente5} />

            <TextInput 
                style={estilos.input}
                placeholder="Fecha (ej. 15/11/2026)"
                placeholderTextColor="#999"
                value={fechaCreacion}
                onChangeText={setFechaCreacion}
            />

            <Button title="Agregar" onPress={registrarReceta} />
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedor: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15
    },
    subtitulo: {
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 5
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 8,
        marginBottom: 10
    },
    inputIngrediente: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 6,
        marginBottom: 6
    }
});