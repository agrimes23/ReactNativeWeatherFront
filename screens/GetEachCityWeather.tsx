import {useState, useEffect} from 'react'
import {API_TOKEN} from "react-native-dotenv"
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute, useIsFocused } from '@react-navigation/native'

type Props = {
    cityName: string;
};

const GetEachCityWeather = (props: Props) => {

    const isFocused = useIsFocused()
    const [weatherData, setWeatherData] = useState<any>([])
    const [icon, setIcon] = useState("")

    const getWeather = async () => {
            await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=${API_TOKEN}&units=$imperial`)
                .then((res) => res.json())
                .then(data => {
                    console.log(data)
                    setIcon(data.weather[0].icon)
                })
                .catch(error => {
                    console.log("Message: " + error);
                });
        }

        useEffect =(() => {
            if(isFocused) {
                getWeather();
            }
            getWeather();

        }, [isFocused])


    return (
        <View>
            <Text>{icon}</Text>
            <Text>{weatherData.main ? weatherData.main.temp_max : null}</Text>
        </View>

    )

}
export default GetEachCityWeather;