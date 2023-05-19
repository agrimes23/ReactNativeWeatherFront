import { useState } from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import Search from './screens/Search'
import WeatherDetail from './screens/WeatherDetail'
import Dashboard from './screens/Dashboard'
import BottomTab from './screens/BottomTab'

export type RootStackParamList = {
  Search: undefined;
  WeatherDetail: { cityName: string };
  Dashboard: undefined;
  TimeCalc: {
    timezoneData: Number,
    sysData: Object
  };
  BottomTab: any;
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
