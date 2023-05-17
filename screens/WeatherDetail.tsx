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
import {useNavigation} from '@react-navigation/native'

type Props = {};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const WeatherDetail = (props: Props) => {
    const navigation = useNavigation<NavigationProp>()

    return (
        <SafeAreaView className="bg-gray">
            <Text>Weather Details</Text>
            <Pressable onPress={() => navigation.navigate("Home")}><Text>Back Home</Text></Pressable>
        </SafeAreaView>
    )

}

export default WeatherDetail;