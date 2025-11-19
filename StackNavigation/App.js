import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Settings';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Perfil' }} />
        <Stack.Screen name="Settings" component={Settings} options={{ title: 'Ajustes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
