import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Navegación</Text>
        <Text style={styles.cardText}>Prueba la navegación hacia otras pantallas.</Text>

        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={() => navigation.navigate('Profile', { userId: 42 })}
        >
          <Text style={styles.buttonText}>Ir a Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.buttonText}>Ir a Settings</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>Practica 15 — Stack Navigation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#222'
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 6,
    color: '#111'
  },
  cardText: {
    fontSize: 14,
    color: '#444',
    marginBottom: 14
  },
  button: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8
  },
  primaryButton: {
    backgroundColor: '#346ef1'
  },
  secondaryButton: {
    backgroundColor: '#6c757d'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  footer: {
    marginTop: 18,
    fontSize: 12,
    color: '#888'
  }
});
