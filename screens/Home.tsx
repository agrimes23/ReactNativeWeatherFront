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

type Props = {};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const Home = (props: Props) => {

    const [weatherData, setWeatherData] = useState()

    const handleSubmit = async () => {
        const result = await fetch("").then((data) => data.json())
        setWeatherData(result)
    }
    

    return (
        <SafeAreaView className="bg-gray">
            <View className="bg-black/60 text-center mx-auto mt-10 p-5 rounded">
                <Text className="text-white text-xl mx-10 text-center">Check out the weather from around the world!</Text>
                <TextInput className="bg-white py-1 my-5 w-60 mx-auto"></TextInput>
                <Pressable className="text-center flex-end" ><Text>Get Weather</Text></Pressable>
            </View>
        </SafeAreaView>
    )

}

export default Home;