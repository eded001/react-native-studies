import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Telas
import HomeScreen from './src/screens/Home';
import HelloWorldScreen from './src/screens/HelloWorld';
import HooksScreen from './src/screens/Hooks';
import InputOutputScreen from './src/screens/InputOutput';
import ImagesScreen from './src/screens/Image';
import ScrollViewScreen from './src/screens/ScrollView';
import SafeAreaPreviewScreen from './src/screens/SafeAreaPreview';
import ExampleWithSafeAreaScreen from './src/screens/ExampleWithSafeArea';
import ExampleWithoutSafeAreaScreen from './src/screens/ExampleWithoutSafeArea';
import FlatListScreen from './src/screens/FlatList';
import Modal from './src/screens/Modal';
import SQLiteDB from './src/screens/SQLiteDB'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* O Stack.Navigator define a pilha de telas */}

      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        {/* initialRouteName -> Define a rota inicial baseada no componente que contém esse pseudo-ID */}
        {/* screenOptions -> Define configurações de renderização de tela como os headers (cabeçalhos) */}

        <Stack.Screen
          name="Home"
          component={HomeScreen} />
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

        <Stack.Screen
          name="SafeAreaPreview"
          component={SafeAreaPreviewScreen} />

        <Stack.Screen
          name="ExampleWithSafeArea"
          component={ExampleWithSafeAreaScreen} />

        <Stack.Screen
          name="ExampleWithoutSafeArea"
          component={ExampleWithoutSafeAreaScreen} />

        <Stack.Screen
          name="FlatList"
          component={FlatListScreen} />

        <Stack.Screen
          name="Modal"
          component={Modal} />

        <Stack.Screen
          name="SQLiteDB"
          component={SQLiteDB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}