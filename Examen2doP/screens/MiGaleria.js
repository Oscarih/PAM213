import React, { useEffect, useState } from 'react';
import { 
  View, Text, StyleSheet, ImageBackground, Image, 
  ScrollView, Button, StatusBar, Alert 
} from 'react-native';

const SPLASH_IMAGE = require('../assets/splash.jpg');
const IMAGES = [
  {
    id: 1,
    title: 'Foto de otra foto',
    description: 'Una hermosa vista del sol cayendo sobre el mar.',
    fullDescription: 'Fotografía tomada en la costa del Pacífico.',
    image: require('../assets/foto1.jpg'),
  },
  {
    id: 2,
    title: 'Playa de noche',
    description: 'Playa de noche con luna enorme.',
    fullDescription: 'Playa con mar paficico y la luna.',
    image: require('../assets/foto2.jpg'),
  },
  {
    id: 3,
    title: 'Sombrilla de playa',
    description: 'Sombrilla de playa en la playa.',
    fullDescription: 'Sombrilla de playa en la playa y mar de fondo.',
    image: require('../assets/foto3.jpg'),
  },
  {
    id: 4,
    title: 'Foto de una pareja',
    description: 'Foto de una pareja besandose.',
    fullDescription: 'Foto de una pareja besandose y un cultivo de fondo.',
    image: require('../assets/foto4.jpg'),
  },
  {
    id: 5,
    title: 'Galaxia',
    description: 'Foto de el espacio exterior.',
    fullDescription: 'Foto de el espacio exterior y las estrellas.',
    image: require('../assets/foto5.jpg'),
  },
  {
    id: 6,
    title: 'Foto de una chica',
    description: 'Foto de una chica con naturaleza de fondo.',
    fullDescription: 'oto de una chica con naturaleza de fondo.',
    image: require('../assets/foto6.jpg'),
  },
];

export default function MiGaleria() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ImageBackground
        source={SPLASH_IMAGE}
        resizeMode="cover"
        style={styles.splashBackground}
      >
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <View style={styles.splashOverlay}>
          <Text style={styles.splashTitle}>Mi Galería</Text>
          <Text style={styles.splashSubtitle}>Cargando tus fotos...</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mi Galería</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {IMAGES.map((item) => (
          <View key={item.id} style={styles.card}>
            <ImageBackground source={item.image} style={styles.image} imageStyle={styles.imageStyle}>
              <View style={styles.overlay}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Button
                  title="Ver detalles"
                  onPress={() =>
                    Alert.alert(item.title, item.fullDescription, [{ text: 'Cerrar' }])
                  }
                  color="#2b6cb0"
                />
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  splashBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 30,
    borderRadius: 20,
  },
  splashTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  splashSubtitle: {
    color: '#dbeafe',
    textAlign: 'center',
    marginTop: 8,
  },

  // Galería
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1',
    paddingTop: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#0d9488',
  },
  scrollContainer: {
    padding: 10,
    alignItems: 'center',
  },
  card: {
    width: '90%',
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 15,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    padding: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    color: '#e0f2fe',
    marginVertical: 5,
  },
});
