import {useState} from 'react';
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


    const handleSubmit = () => {
        // console.log(city)

        navigation.navigate("WeatherDetail", {cityName: city})
    }

    return (
        <ImageBackground className="w-screen h-full z-0" source={require('../assets/images/blueskybg.jpg')}>
            <SafeAreaView className="bg-gray">
                <ScrollView>
                        <Text>Well Hello this is the dashboard screen :O </Text>
                </ScrollView>                
            </SafeAreaView>
        </ImageBackground>
        
    )

}

export default Dashboard;