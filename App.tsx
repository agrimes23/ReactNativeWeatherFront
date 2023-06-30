import { useState } from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from './src/screens/Search'
import WeatherDetail from './src/screens/WeatherDetail'
import Dashboard from './src/screens/Dashboard'
import BottomTab from './src/screens/BottomTab'

export type RootStackParamList = {
  Search: { city: string, setCity: (city: string) => void };
  WeatherDetail: { cityName: string };
  Dashboard: undefined;
  TimeCalc: {
      setSunriseTime: string,
      setSunsetTime: string,
      sunriseTime: string,
      sunsetTime: string,
  };
  BottomTab: any;
  GetEachCityWeather: any;
}

export type WeatherDataType = {
    name: string;
    sys: {
        sunrise: number;
        sunset: number;
    };
    main: {
        temp_max: number;
    };
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="BottomTab">
        
 
        <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown: false}} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


export default App;
