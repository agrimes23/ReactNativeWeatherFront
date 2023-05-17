import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = {};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const Home = (props: Props) => {


    return (
        <SafeAreaView className="bg-gray">
            <View className="bg-black/60 text-center mx-auto mt-10 p-5 rounded">
                <Text className="text-white text-xl mx-10 text-center">Check out the weather from around the world!</Text>
                <TextInput></TextInput>
            </View>
        </SafeAreaView>
    )

}

export default Home;