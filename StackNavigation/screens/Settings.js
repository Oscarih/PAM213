import React from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';

export default function Settings({ navigation }) {
  // si quieres puedes convertir esto a estado real; aquí es estático para la práctica
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previous => !previous);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajustes</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.optionText}>Modo oscuro (ejemplo)</Text>
          <Switch
            value={isEnabled}
            onValueChange={toggleSwitch}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, styles.homeButton]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Volver al Home</Text>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14
  },
  optionText: {
    fontSize: 16,
    color: '#222'
  },
  button: {
    marginTop: 8,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center'
  },
  homeButton: {
    backgroundColor: '#346ef1'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
});
