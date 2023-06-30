import {useState, useEffect} from 'react'
import {API_TOKEN} from "react-native-dotenv"
import {
  SafeAreaView,
  Text,
  View,
  Image,
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
    const [maxTemp, setMaxTemp] = useState<Number>()

    const getWeather = async () => {
            await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=${API_TOKEN}&units=imperial`)
                .then((res) => res.json())
                .then(data => {
                    setIcon(data.weather[0].icon)
                    setMaxTemp(data.main.temp_max)
                })
                .catch(error => {
                    console.log("Message: " + error);
                });
        }

    useEffect (() => {
        if(isFocused) {
            getWeather();

        }
    }, [isFocused])


    return (
        <View className="flex-col">

            <Image
                className="w-16 h-16"
                source={{
                    uri: `http://openweathermap.org/img/wn/${icon}@2x.png`
                }}
            />
            <Text className="text-xl">{maxTemp} °F</Text>
        </View>

    )

}
export default GetEachCityWeather;