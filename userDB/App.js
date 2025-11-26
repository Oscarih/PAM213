import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

// IMPORTANTE: Aquí buscamos tu archivo dentro de la carpeta 'screens'
import UsuarioView from './screens/InsertUsuarioScreen'; 

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Mostramos tu pantalla de usuarios */}
      <UsuarioView /> 
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});