import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useRecetaContext } from '../Providers/RecetaProvider'

export default function DetalleReceta() {
    const { recetas, eliminarReceta } = useRecetaContext();
    const [num, setNum] = useState('');
    const [receta, setReceta] = useState<any>(null);

    const buscar = () => {
        const encontrada = recetas[parseInt(num) - 1] || recetas.find(r => r.id === num);
        
        if (encontrada) {
            setReceta(encontrada);
        } else {
            setReceta(null);
            Alert.alert("Aviso", "No encontrada");
        }
    };

    const borrar = () => {
        eliminarReceta(receta.id);
        setReceta(null);
        setNum('');
        Alert.alert("Éxito", "Se eliminó el registro correctamente");
    };

    return (
        <View style={s.c}>
            <Text style={s.t}>Detalle Receta</Text>
            
            <View style={s.row}>
                <TextInput 
                    style={s.input} 
                    placeholder="Numero Receta" 
                    value={num} 
                    onChangeText={setNum} 
                />
                <Button title="Buscar" onPress={buscar} />
            </View>

            {receta ? (
                <View style={s.card}>
                    <Text style={{fontWeight: 'bold'}}>{receta.nombre}</Text>
                    <Text>Ingredientes: {receta.ingredientes.join(', ')}</Text>
                    <Text>Fecha: {receta.fecha}</Text>
                    
                    <View style={s.rowBtn}>
                        <Button title="Volver" onPress={() => setReceta(null)} />
                        <Button title="Eliminar" color="red" onPress={borrar} />
                    </View>
                </View>
            ) : (
                <Text style={{textAlign: 'center', color: '#888'}}>Ingrese el número de la receta</Text>
            )}
        </View>
    );
}

const s = StyleSheet.create({
    c: { flex: 1, padding: 15 },
    t: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
    row: { flexDirection: 'row', marginBottom: 15, justifyContent: 'space-between' },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 8, flex: 1, marginRight: 10, borderRadius: 4 },
    card: { borderWidth: 1, borderColor: '#ddd', padding: 12, borderRadius: 5, backgroundColor: '#f9f9f9' },
    rowBtn: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }
});