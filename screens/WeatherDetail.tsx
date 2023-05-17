import {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import {useNavigation, useRoute } from '@react-navigation/native'
import {API_TOKEN} from "react-native-dotenv"

import TimeCalc from '../components/TimeCalc'

type Props = {

};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const WeatherDetail = (props: Props) => {
    const navigation = useNavigation<NavigationProp>()
    const route = useRoute()
    const cityName = route.params?.cityName
    const [localTime, setLocalTime] = useState("")

    const [weatherData, setWeatherData] = useState([{}])
    const [icon, setIcon] = useState("")

    const getWeather = async () => {
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_TOKEN}&units=imperial`)
            .then((data) => data.json())
            .catch((error) => {
                console.error(error);
                // ADD THIS THROW error
                // throw error;
            });
        setWeatherData(result)
        setIcon(weatherData.weather[0].icon)
    }

    // const getLocalTime = () => {
    //     const date = new Date( (weatherData ? weatherData.dt : null) * 1000  + ((weatherData.timezone ? weatherData.timezone : null) *1000)).toUTCString().split("GMT")
    //     setLocalTime(date[0])
    // }

    useEffect(() => {
        console.log("City is " + cityName)
        getWeather()
        
        // getLocalTime()
    }, [])


    return (
        <SafeAreaView className="">
            <ImageBackground className="w-screen h-screen z-0" source={require('../assets/images/clear-night.jpg')}>
                <View className="mx-auto my-6 p-10 bg-white/40 rounded">
                    <Text className="text-xl text-center">{weatherData.name ? weatherData.name : null}'s Current Weather</Text>
                    <Text className="text-center">{localTime}</Text>
                    <View className="flex-row justify-evenly p-3 h-16">
                        <Image className="w-14" source={{
                            uri: `http://openweathermap.org/img/wn/${icon}@2x.png`
                            }} 
                        />
                        <Text className="my-auto">{weatherData.main ? weatherData.main.temp_max : null}°F</Text>
                    </View>
                    <View className="flex-row ">
                        <Text className="mr-2">Min Temp: </Text>
                        <Text>{weatherData.main ? weatherData.main.temp_min : null}°F</Text>
                    </View>
                    <View className="flex-row ">
                        <Text className="mr-2">Humidity: </Text>
                        <Text>{weatherData.main ? weatherData.main.humidity : null}</Text>
                    </View>
                    <View className="flex-row ">
                        <Text className="mr-2">Visibility: </Text>
                        <Text>{weatherData.visibility ? weatherData.visibility : null} km</Text>
                    </View>
                    

                    {/* <TimeCalc weatherData={weatherData} /> */}

                    <TouchableOpacity className="bg-purple-500 p-3 w-28 mx-auto mt-4" onPress={() => navigation.navigate("Home")}>
                        <Text className="text-center text-white">Back Home</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )

}

export default WeatherDetail;