import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Telas
import HomeScreen from './src/screens/HomeScreen';
import HelloWorldScreen from './src/screens/HelloWorldScreen';
import HooksScreen from './src/screens/HooksScreen';
import InputOutputScreen from './src/screens/InputOutputScreen';
import ImagesScreen from './src/screens/ImageScreen';
import ScrollViewScreen from './src/screens/ScrollViewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* O Stack.Navigator define a pilha de telas */}

      <Stack.Navigator initialRouteName="Home">
        {/* initialRouteName -> Define a rota inicial baseada no componente que contém esse pseudo-ID */}

        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Stack.Screen -> define e "exibe" (deixa "acessível") as rotas (telas) */}
        {/* name -> nome das rotas */}
        {/* component -> component de renderização das rotas */}

        <Stack.Screen
          name="HelloWorld"
          component={HelloWorldScreen} />

        <Stack.Screen
          name="Hooks"
          component={HooksScreen} />

        <Stack.Screen
          name="InputOutput"
          component={InputOutputScreen} />

        <Stack.Screen
          name="Image"
          component={ImagesScreen} />

        <Stack.Screen
          name="ScrollView"
          component={ScrollViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}