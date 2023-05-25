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
  Switch
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation, useRoute } from '@react-navigation/native'
import {API_TOKEN} from "react-native-dotenv"
import axios from 'axios'
import TimeCalc from '../components/TimeCalc'

type Props = {

};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Search">;

const WeatherDetail = (props: Props) => {
    const navigation = useNavigation<NavigationProp>()
    const route: any = useRoute()
    const cityName = route.params?.cityName

    const [weatherData, setWeatherData] = useState<any>([])
    const [localTime, setLocalTime] = useState<string>("")
    const [sunriseTime, setSunriseTime] = useState("")
    const [sunsetTime, setSunsetTime] = useState("")

    const [icon, setIcon] = useState("")

    const [name, setName] = useState({cityName: ''})

    const [isEnabled, setIsEnabled] = useState(false)
    const [degrees, setDegrees] = useState("Farenheit")
    const [tempUnit, setTempUnit] = useState("°F")
    const [apiUnit, setApiUnit] =useState("imperial")

    const getWeather = async () => {
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_TOKEN}&units=${apiUnit}`)
            .then((res) => res.json())
            .then(data => {
                setWeatherData(data)
                setIcon(data.weather[0].icon)
                getTime(data.dt, data.timezone, data.sys.sunrise, data.sys.sunset)
                setName({...name, cityName: data.name})
            })
            .catch(error => {
                console.log("Message: " + error);
            });
    }

    const addCityToDB = () => {
             axios.post("http://10.0.2.2:3000/api/v1/weather", name)
             .then((res) => console.log(res.data));
        }

    const getDegrees = async () => {
        if (isEnabled) {
            setApiUnit("imperial")
            setDegrees("Celcius")
            setTempUnit("°C")
        } else {
            setApiUnit("metric")
            setDegrees("Farenheit")
            setTempUnit("°F")
        }
    }

    const getTime = (time: number, zone: number, sunrise: number, sunset: number ) => {
        const localDate = new Date( time * 1000  + ((zone) *1000)).toUTCString().split("GMT")
        const localSunrise = new Date(( (sunrise) * 1000  + ((zone) * 1000 )) ).toUTCString()
        const localSunset = new Date( (sunset) * 1000  + ((zone) *1000)).toUTCString()

        setLocalTime(localDate[0])
        setSunriseTime(`${localSunrise.split(" ")[4]} ${ + localSunrise.split(" ")[4].split(":")[0] > 12 ? "PM" : "AM" }`)
        setSunsetTime(`${localSunset.split(" ")[4]} ${ + localSunset.split(" ")[4].split(":")[0] > 12 ? "PM" : "AM" }`)
    }

    useEffect(() => {
        getWeather()
        getDegrees()

    }, [isEnabled])

    return (
        <SafeAreaView className="">
            <ImageBackground className="w-screen h-screen z-0" source={require('../../assets/images/clear-night.jpg')}>

                <View className="mx-auto my-6 p-10 bg-white/40 rounded">
                    <Text className="text-4xl text-left">{weatherData.name ? weatherData.name : null}</Text>
                    <Text className="text-left text-lg">{localTime}</Text>
                    <View className="flex-row justify-evenly items-center ">
                            <Text className="text-base">{degrees}</Text>
                            <Switch
                                className=""
                                value={isEnabled}
                                onValueChange={(value:any) => setIsEnabled(value)}
                            />
                        </View>
                    <View className="flex-row justify-evenly p-3">
                        <Image className="w-16 h-16" source={{
                            uri: `http://openweathermap.org/img/wn/${icon}@2x.png`
                            }}
                        />
                        <Text className="my-auto text-xl">{weatherData.main ? weatherData.main.temp_max : null}{tempUnit}</Text>
                    </View>
                    <View className="flex-row ">
                        <Text className="mr-2 text-base">
                            Min Temp:   {weatherData.main ? weatherData.main.temp_min : null}{tempUnit}
                        </Text>
                    </View>
                    <View className="flex-row ">
                        <Text className="mr-2 text-base">
                            Humidity:   {weatherData.main ? weatherData.main.humidity : null}%
                        </Text>
                    </View>

                    <View className="flex-row ">
                        <Text className="mr-2 text-base">Sunrise Time:   {sunriseTime}</Text>
                    </View>
                    <View className="flex-row ">
                        <Text className="mr-2 text-base">Sunset Time:   {sunsetTime}</Text>
                    </View>

                    <View className="flex-row justify-evenly">
                        <TouchableOpacity className="bg-purple-500 p-3 w-28 mr-1 mt-4 rounded" onPress={() => navigation.navigate("SearchScreen")}>
                            <Text className="text-center text-white">Back to Search</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className=" bg-blue-300 p-3 ml-1 mt-4 w-28 rounded" onPress={addCityToDB}>
                            <Text className="text-center text-white">Add to Dashboard</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>
        </SafeAreaView>
    )

}

export default WeatherDetail;