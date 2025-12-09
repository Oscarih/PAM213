import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

// --- Components ---

const SplashScreen = () => (
  <View style={styles.splashContainer}>
    <Ionicons name="partly-sunny" size={100} color="#fff" />
    <Text style={styles.splashText}>Weather</Text>
  </View>
);

const WeatherCard = ({ city, icon, temp, desc, details }) => {
  const handlePress = () => {
    if (Platform.OS === 'web') {
      window.alert(`${city}\n\nTemperatura: ${temp}\n${details}`);
    } else {
      Alert.alert(
        city,
        `Temperatura: ${temp}\n${details}`,
        [{ text: "OK" }]
      );
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cityName}>{city}</Text>
        <Ionicons name={icon} size={32} color="#FFD700" />
      </View>
      <Text style={styles.temp}>{temp}</Text>
      <Text style={styles.desc}>{desc}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Ver detalles</Text>
      </TouchableOpacity>
    </View>
  );
};

// --- Main App ---

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    // Simulate Splash Screen delay
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const weatherData = [
    {
      id: 1,
      city: "Ciudad de México",
      icon: "sunny",
      temp: "24°C",
      desc: "Soleado",
      details: "Humedad: 40%\nViento: 10 km/h"
    },
    {
      id: 2,
      city: "Monterrey",
      icon: "cloud",
      temp: "18°C",
      desc: "Nublado",
      details: "Humedad: 60%\nViento: 15 km/h"
    },
    {
      id: 3,
      city: "Guadalajara",
      icon: "rainy",
      temp: "20°C",
      desc: "Lluvia ligera",
      details: "Humedad: 80%\nViento: 5 km/h"
    },
    {
      id: 4,
      city: "Cancún",
      icon: "thunderstorm",
      temp: "28°C",
      desc: "Tormenta",
      details: "Humedad: 90%\nViento: 25 km/h"
    }
  ];

  if (isShowSplash) {
    return <SplashScreen />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Clima Actual</Text>
            <Text style={styles.headerDate}>Hoy, 8 Dic</Text>
          </View>

          <ScrollView contentContainerStyle={styles.scrollContent}>
            {weatherData.map((item) => (
              <WeatherCard
                key={item.id}
                city={item.city}
                icon={item.icon}
                temp={item.temp}
                desc={item.desc}
                details={item.details}
              />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashContainer: {
    flex: 1,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', // Dark overlay for readability
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerDate: {
    fontSize: 18,
    color: '#ddd',
    marginTop: 5,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  temp: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  desc: {
    fontSize: 18,
    color: '#666',
    marginBottom: 15,
    textTransform: 'capitalize',
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
