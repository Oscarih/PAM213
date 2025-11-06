import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, StatusBar} from 'react-native';

const MAIN_IMAGE = require("../assets/Recursos/MAIN_IMAGE.jpg");

export default function Tarjeta1() {
  
  return (
    <ImageBackground
    source={MAIN_IMAGE}
    resizeMode='cover'
    imageStyle={styles.mainImageStyle}
    style={styles.mainBackground}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <View style={styles.mainOverlay}>
        <Text style={styles.welcome}>Ferrari sf90</Text>
        <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Título: Ferrari sf90 Detalles: Ferrari gris Botón Cerrar")}
        >
          <Text style={styles.buttonText}>Empezar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImageStyle: {
    opacity: 0.9,
  },
  mainOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)', 
    padding: 20,
    borderRadius: 12,
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 20,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#61dafb',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: '700',
  },
});