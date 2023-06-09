import { useState, useEffect } from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from './Search'
import Dashboard from './Dashboard'
import WeatherDetail from './WeatherDetail'
import axios from 'axios'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




// Maybe this will help with resetting the search tab to the search screen?
// // https://stackoverflow.com/questions/56506076/react-native-clear-the-previous-screen-from-the-navigation-stack

const SearchNav = () => {

    useEffect (() => {


    }, [])

    return (
        <Stack.Navigator initialRouteName='Search'>
            <Stack.Screen
                name="SearchScreen"
                component={Search}
                options={{headerShown: false}}

            />
            <Stack.Screen
                name="WeatherDetail"
                component={WeatherDetail}
                options={{headerShown: false}}

            />
        </Stack.Navigator>
    )
}


const BottomTab = () => {

    const handleDelete = (id: number) => {
        axios.delete("http://10.0.2.2:3000/api/v1/weather/" + id)
    }


  return (
     
      <Tab.Navigator>
        <Tab.Screen name="Search" component={SearchNav} options={{headerShown: false}} />
        <Tab.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
      </Tab.Navigator>

  );
}


export default BottomTab;
