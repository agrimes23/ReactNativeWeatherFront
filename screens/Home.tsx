import {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import {API_TOKEN} from "@env"
import {useNavigation} from '@react-navigation/native'

type Props = {};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const Home = (props: Props) => {

    const navigation = useNavigation<NavigationProp>()

    const [weatherData, setWeatherData] = useState()

    const handleSubmit = async () => {
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Detroit&appid=${API_TOKEN}&units=imperial`).then((data) => data.json())
        setWeatherData(result)
        navigation.navigate("WeatherDetail")
    }
    

    return (
        <SafeAreaView className="bg-gray">
            <View className="bg-black/60 text-center mx-auto mt-10 p-5 rounded">
                <Text className="text-white text-xl mx-10 text-center">Check out the weather from around the world!</Text>
                <TextInput className="bg-white py-1 my-5 w-60 mx-auto"></TextInput>
                <Pressable className="text-center flex-end" onPress={handleSubmit}><Text>Get Weather</Text></Pressable>
            </View>
        </SafeAreaView>
    )

}

export default Home;