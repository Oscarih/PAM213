import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Profile({ navigation, route }) {
  const { userId } = route.params ?? {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <View style={styles.card}>
        <Text style={styles.label}>ID de usuario</Text>
        <Text style={styles.value}>{userId ?? 'No proporcionado'}</Text>

        <Text style={[styles.label, { marginTop: 12 }]}>Descripción</Text>
        <Text style={styles.note}>
          Esta pantalla muestra cómo recibir parámetros desde la pantalla anterior
          y cómo regresar usando navigation.goBack().
        </Text>

        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 16,
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
  label: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4
  },
  value: {
    fontSize: 18,
    color: '#111',
    fontWeight: '600'
  },
  note: {
    fontSize: 14,
    color: '#444',
    marginTop: 4,
    lineHeight: 20
  },
  button: {
    marginTop: 16,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center'
  },
  backButton: {
    backgroundColor: '#e25555'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
});
