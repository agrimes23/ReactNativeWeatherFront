import {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {useNavigation, useRoute} from '@react-navigation/native'

const image = {sours: ''}

type Props = {};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Search">;



const Dashboard = (props: Props) => {

    const [city, setCity] = useState("")

    const navigation = useNavigation<NavigationProp>()
    const getDBWeather = async () => {
        await fetch(`http://localhost:3000/api/v1/weather/`)
            .then((res) => res.json())
            .then(data => {
                console.log("This is data:  " + data)
                setCity(data)
            })
            .catch(error => {
                console.log("Message: " + error);
            });
    }

    const handleSubmit = () => {
        // console.log(city)
        navigation.navigate("WeatherDetail", {cityName: city})
    }

    useEffect = (() => {
        getDBWeather();
        console.log(city)
        console.log("Hello")
    })

    return (
        <ImageBackground className="w-screen h-full z-0" source={require('../assets/images/blueskybg.jpg')}>
            <SafeAreaView className="bg-gray">
                <ScrollView>
                    <View className="m-auto mt-10">
                        <Text className="text-2xl">Dashboard! (Coming Soon)</Text>
                    </View>
                </ScrollView>                
            </SafeAreaView>
        </ImageBackground>
        
    )

}

export default Dashboard;