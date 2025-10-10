import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ContadorScreen() { 
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Contador:</Text> 
      <Text style={styles.Text2}>{contador}</Text>

      <View style={styles.botonesContainer}> 
        <Button color='red' title="Agregar" onPress={() => setContador(contador + 1)} />
        <Button color='pink' title="Quitar" onPress={() => setContador(contador - 1)} />
        <Button color='green' title="Reiniciar" onPress={() => setContador(0)} />
      </View> 

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00fff2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: '#6c0570ff',
    fontSize: 40,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
  Text2: {
    color: '#ff0000ff',
    fontSize: 40,
    fontFamily: 'Courier',
    fontWeight: '700',
    fontStyle: 'normal',
    textDecorationLine: 'underline',
  },
  botonesContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },
});
