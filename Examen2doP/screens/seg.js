import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

import Tarjeta1 from './Tarjeta1';
import Tarjeta2 from './Tarjeta2';
import Tarjeta3 from './Tarjeta3';
import Tarjeta4 from './Tarjeta4';
import Tarjeta5 from './Tarjeta5';
import Tarjeta6 from './Tarjeta6';




export default function MiGalería() {
  const [screen, setScreen] = useState('MiGalería');

  switch (screen) {
    case 'Tarjeta1':
      return <Tarjeta1 />;
      
    case 'Tarjeta2':
      return <Tarjeta2 />;

    case 'Tarjeta3':
      return <Tarjeta3 />;

    case 'Tarjeta4':
      return <Tarjeta4 />;

    case 'Tarjeta5':
      return <Tarjeta5 />;
      
    case 'Tarjeta6':
      return <Tarjeta6 />;

    default:
      return (
        <View style={styles.container}>
          <Text>Mi Galería</Text>
          <Button title="Tarjeta: 1" onPress={() => setScreen('Tarjeta1')} />
          <Button title="Tarjeta: 2" onPress={() => setScreen('Tarjeta2')} />
          <Button title="Tarjeta: 3" onPress={() => setScreen('Tarjeta3')} />
          <Button title="Tarjeta: 4" onPress={() => setScreen('Tarjeta4')} />
          <Button title="Tarjeta: 5" onPress={() => setScreen('Tarjeta5')} />
          <Button title="Tarjeta: 6" onPress={() => setScreen('Tarjeta6')} />
          
        </View>
      );
  }
}


const styles = StyleSheet.create
({
  container: 
  {
    flex: 1,
    backgroundColor: '#4f9b91ff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
})


