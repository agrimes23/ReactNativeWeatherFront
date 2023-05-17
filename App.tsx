import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home'
import WeatherDetail from './screens/WeatherDetail'

export type RootStackParamList = {
  Home: undefined;
  WeatherDetail: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="WeatherDetail" component={WeatherDetail} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
