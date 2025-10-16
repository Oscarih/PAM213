import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextInputYAlert from './TextInputYAlert';
import ImageBackgroungYSlapshScreen from './ImageBackgroungYSlapshScreen';
import ScrollView from './ScrollView';
import ActivityIndicator from './ActivityIndicator';
import FlatListYSectionList from './FlatListYSectionList';
import Modal  from './Modal';
import BottomSheet from './BottomSheet';


export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
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
        </View>
      );
  }
}


const styles = StyleSheet.create
({
  container: 
  {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
})