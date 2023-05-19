import { useState } from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from './Search'
import Dashboard from './Dashboard'

const Tab = createBottomTabNavigator();


const BottomTab = () => {

  return (
     
      <Tab.Navigator>
        <Tab.Screen name="Search" component={Search} options={{headerShown: false}} />
        <Tab.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
      </Tab.Navigator>

  );
}


export default BottomTab;
