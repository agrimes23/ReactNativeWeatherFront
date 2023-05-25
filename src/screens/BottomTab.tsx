import { useState, useEffect } from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from './Search'
import Dashboard from './Dashboard'
import WeatherDetail from './WeatherDetail'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




// Maybe this will help with resetting the search tab to the search screen?
// // https://stackoverflow.com/questions/56506076/react-native-clear-the-previous-screen-from-the-navigation-stack

const SearchNav = () => {

//     const [weatherSearch, setWeatherSearch] = useState<any>()
//     const [city, setCity] = useState<string>("")
//
//      const getWeatherTwo = async () => {
//         await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_TOKEN}&units=${apiUnit}`)
//             .then((res) => res.json())
//             .then(data => {
//                 setWeatherData(data)
//                 setIcon(data.weather[0].icon)
//                 setSunriseData(data.sys.sunrise)
//                 setSunsetData(data.sys.sunset)
//                 setTimezoneData(data.timezone)
// //                 getTime(data.dt, data.timezone, data.sys.sunrise, data.sys.sunset)
//                 setName({...name, cityName: data.name})
//             })
//             .catch(error => {
//                 console.log("Message: " + error);
//             });
//     }

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

  return (
     
      <Tab.Navigator>
        <Tab.Screen name="Search" component={SearchNav} options={{headerShown: false}} />
        <Tab.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
      </Tab.Navigator>

  );
}


export default BottomTab;
