import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native';

// Exportamos la funcion indicador
export default function Indicator() {
  // estos son los estados
  const [cargando, setCargando] = useState(false);
  const [mostrarContenido, setMostrarContenido] = useState(false);

  // Función que maneja su funcionamiento
  //Aquí cambiamos el valor del estado con el set
  const manejarCarga = () => {
    setCargando(true);
    setMostrarContenido(false);

    setTimeout(() => {
      setCargando(false);
      setMostrarContenido(true);
    }, 5000); 
  };

  // View
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Practica: Activity Indicator</Text>
      
      <Button color='hsla(329, 92%, 66%, 1.00)' title="Acción" onPress={manejarCarga} />
      {/* Aquí se usa el componente Activity Indicator*/}
      {cargando && (
        <ActivityIndicator size="large" color='hsla(266, 92%, 66%, 1.00)' style={styles.indicador} />
      )}

      {mostrarContenido && (
        <Text style={styles.contenido}> Acción realizada  </Text>
      )}
    </View>
  );
}

//Estilos
const styles = StyleSheet.create({
  contenedor: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  indicador: {
    marginVertical: 20,
  },
  contenido: {
    fontSize: 16,
    color: 'green',
    marginTop: 10,
  },
});