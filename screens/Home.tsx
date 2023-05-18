import {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {useNavigation, useRoute} from '@react-navigation/native'

const image = {sours: ''}

type Props = {};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;



const Home = (props: Props) => {

    const [city, setCity] = useState("")

    const navigation = useNavigation<NavigationProp>()


    const handleSubmit = () => {
        // console.log(city)

        navigation.navigate("WeatherDetail", {cityName: city})
    }

    return (
        <SafeAreaView className="bg-gray">
            <ImageBackground className="w-screen h-screen z-0" source={require('../assets/images/blueskybg.jpg')}>
            <View className="bg-white/60 text-center mx-auto mt-10 p-5 rounded">
                <Text className="text-black text-xl mx-10 text-center">Check out the weather from around the world!</Text>
                <TextInput onChangeText={newText => setCity(newText)} defaultValue={city} className="bg-white py-1 my-5 w-60 mx-auto"></TextInput>
                <View className="items-end">
                    <TouchableOpacity className="text-center flex-end bg-green-500 p-3 w-28 rounded" onPress={handleSubmit}>
                        <Text className="text-center text-white font-bold text-sm">Get Weather</Text>
                    </TouchableOpacity>
                </View>

            </View>
            </ImageBackground>
        </SafeAreaView>
    )

}

export default Home;