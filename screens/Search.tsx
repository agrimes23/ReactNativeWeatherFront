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


type Props = {};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Search">;

const Search = (props: Props) => {

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
                    <KeyboardAvoidingView behavior="padding" className="flex-1">
                        <View className="bg-white/60 text-center mx-auto mt-32 p-5 rounded">
                            <Text className="text-black text-2xl mx-5 text-center">Check out the weather from around the world!</Text>
                            <TextInput onChangeText={newText => setCity(newText)} defaultValue={city} className="bg-white py-1 my-12 w-60 mx-auto text-lg"></TextInput>

                            <View className="items-end">
                                <TouchableOpacity className="text-center flex-end bg-green-500 p-3 w-28 rounded" onPress={handleSubmit}>
                                    <Text className="text-center text-white font-bold text-sm">Get Weather</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>                
            </SafeAreaView>
        </ImageBackground>
        
    )

}

export default Search;