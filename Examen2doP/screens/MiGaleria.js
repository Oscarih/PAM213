import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Button, StatusBar } from 'react-native';

import Tarjeta1 from './Tarjeta1';
import Tarjeta2 from './Tarjeta2';
import Tarjeta3 from './Tarjeta3';
import Tarjeta4 from './Tarjeta4';
import Tarjeta5 from './Tarjeta5';
import Tarjeta6 from './Tarjeta6';

const SPLASH_IMAGE = require('../assets/Recursos/SPLASH_IMAGE.jpeg');
const LOGO_IMAGE = require('../assets/Recursos/LOGO_IMAGE.png'); 

export default function MiGaleria() {
  const [isLoading, setIsLoading] = useState(true);
  const [screen, setScreen] = useState('MiGaleria');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ImageBackground
        source={SPLASH_IMAGE}
        resizeMode="stretch"
        style={styles.splashBackground}
        imageStyle={styles.splashImageStyle}
      >
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <View style={styles.splashOverlay}>
          <Image source={LOGO_IMAGE} style={styles.logo} resizeMode="contain" />
          <Text style={styles.splashTitle}>Mi Galería</Text>
          <Text style={styles.splashSubtitle}>Iniciando aplicación...</Text>
        </View>
      </ImageBackground>
    );
  }

  switch (screen) {
    case 'Tarjeta1':
      return <Tarjeta1 onBack={() => setScreen('MiGaleria')} />;
    case 'Tarjeta2':
      return <Tarjeta2 onBack={() => setScreen('MiGaleria')} />;
    case 'Tarjeta3':
      return <Tarjeta3 onBack={() => setScreen('MiGaleria')} />;
    case 'Tarjeta4':
      return <Tarjeta4 onBack={() => setScreen('MiGaleria')} />;
    case 'Tarjeta5':
      return <Tarjeta5 onBack={() => setScreen('MiGaleria')} />;
    case 'Tarjeta6':
      return <Tarjeta6 onBack={() => setScreen('MiGaleria')} />;
    default:
      return (
        <View style={styles.container}>
          <Text style={{ fontSize: 24, color: '#fff', marginBottom: 20 }}>Mi Galería</Text>
          <Button title="Tarjeta 1" onPress={() => setScreen('Tarjeta1')} />
          <Button title="Tarjeta 2" onPress={() => setScreen('Tarjeta2')} />
          <Button title="Tarjeta 3" onPress={() => setScreen('Tarjeta3')} />
          <Button title="Tarjeta 4" onPress={() => setScreen('Tarjeta4')} />
          <Button title="Tarjeta 5" onPress={() => setScreen('Tarjeta5')} />
          <Button title="Tarjeta 6" onPress={() => setScreen('Tarjeta6')} />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  splashBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImageStyle: {
    opacity: 0.85,
  },
  splashOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.45)',
    padding: 24,
    borderRadius: 12,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  splashTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
  },
  splashSubtitle: {
    color: '#dbeafe',
    marginTop: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#4f9b91ff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
