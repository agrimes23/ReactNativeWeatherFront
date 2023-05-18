import { useState } from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './screens/Home'
import WeatherDetail from './screens/WeatherDetail'
import Dashboard from './screens/Dashboard'

export type RootStackParamList = {
  Home: undefined;
  WeatherDetail: { cityName: string };
  Dashboard: undefined;
  TimeCalc: {
    timezoneData: Number,
    sysData: Object
  };
}

const Tab = createBottomTabNavigator<RootStackParamList>();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={(route: any) => ({
          tabBarIcon: ({focused, color, size}) => {
            
            let iconName;
            let rn = route.name;

            if (rn === "Home") {
              iconName = focused ? 'home' :'home-outline'
            } else if (rn === "Dashboard") {
              iconName = focused ? 'list' : 'list-outline'
            }

            return <Text >@</Text>

          }
        })}
        >

        <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Tab.Screen name="WeatherDetail" component={WeatherDetail} options={{headerShown: false}} />
        <Tab.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;
