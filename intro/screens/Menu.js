import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Repaso from './Repaso';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextInputYAlert from './TextInputYAlert';
import ImageBackgroungYSlapshScreen from './ImageBackgroungYSlapshScreen';
import ScrollView from './ScrollView';
import ActivityIndicator from './ActivityIndicator';
import FlatListYSectionList from './FlatListYSectionList';
import Modal  from './Modal';
import BottomSheet from './BottomSheet';
import RegistrosScreen from './RegistrosScreen';



export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'Repaso':
      return <Repaso />;
      
    case 'contador':
      return <ContadorScreen />;

    case 'botones':
      return <BotonesScreen />;

    case 'TextInput':
      return <TextInputYAlert />;

    case 'ImageBackgroung':
      return <ImageBackgroungYSlapshScreen />;
      
    case 'ScrollView':
      return <ScrollView />;


    case 'ActivityIndicator':
        return <ActivityIndicator />;

    case 'FlatListYSectionList':
        return <FlatListYSectionList />;

    case 'Modal':
        return <Modal />;


    case 'BottomSheet':
        return <BottomSheet />;

    case 'RegistrosScreen':
        return <RegistrosScreen />;

    default:
      return (
        <View style={styles.container}>
          <Text>Menú de Práctica</Text>
          <Button title="Práctica: Contador" onPress={() => setScreen('contador')} />
          <Button title="Práctica: Botones" onPress={() => setScreen('botones')} />
          <Button title="Práctica: Text Input y Alert" onPress={() => setScreen('TextInput')} />
          <Button title="Práctica: ImageBackgroung Y SlapshScreen" onPress={() => setScreen('ImageBackgroung')} />
          <Button title="Práctica: ScrollView" onPress={() => setScreen('ScrollView')} />
          <Button title="Práctica: Activity Indicator" onPress={() => setScreen('ActivityIndicator')} />
          <Button title="Práctica: FlatList y Section List" onPress={() => setScreen('FlatListYSectionList')} />
          <Button title="Práctica: Modal" onPress={() => setScreen('Modal')} />
          <Button title="Práctica: Bottom Sheet" onPress={() => setScreen('BottomSheet')} />
          <Button title="Practica No.11: Repaso" onPress={() => setScreen('Repaso')} />
          <Button title="RegistrosScreen" onPress={() => setScreen('RegistrosScreen')} />
        </View>
      );
  }
}


const styles = StyleSheet.create
({
  container: 
  {
    flex: 1,
    backgroundColor: '#219d8aff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
})