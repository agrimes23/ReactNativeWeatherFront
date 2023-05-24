import {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import {useNavigation, useRoute, useIsFocused } from '@react-navigation/native'
import axios from 'axios'
import GetEachCityWeather from './GetEachCityWeather'

type Props = {};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Search">;

const Dashboard = (props: Props) => {

    const [getData, setGetData] = useState<Array<Object>>([])
    const isFocused = useIsFocused()

    const navigation = useNavigation<NavigationProp>()

    const getDBWeather = () => {

         axios.get(`http://10.0.2.2:3000/api/v1/weather`)
            .then(((res: any) => setGetData(res.data)), (err) => console.log("Woops " + err))
            .catch(error => {
                console.log("Message: " + error);
            });
    }

    const handleDelete = () => {

        axios.delete("http://10.0.2.2:3000/api/v1/weather")
    }

    useEffect (() => {
        if (isFocused) {
            getDBWeather();
        }

    }, [isFocused])

    return (
        <ImageBackground className="w-screen h-full z-0" source={require('../assets/images/blueskybg.jpg')}>
            <SafeAreaView className="bg-gray">
                <ScrollView>
                    <View className="mt-10">

                        {getData.map((weather: Object, index: number) => {


                        return(
                            <View className="bg-white/60 p-5 rounded flex-row w-72 my-4 mx-auto justify-around" key={index}>
                                <View clasName="flex-col">
                                    <Text className="text-2xl text-black pt-3" >{weather.cityname} </Text>
                                    <TouchableOpacity className="w-14 p-2 mt-4 bg-red-400/80 rounded" onPress={handleDelete}>
                                        <Text className="text-center">Delete</Text>
                                    </TouchableOpacity>
                                </View>
                                <GetEachCityWeather cityName={weather.cityname}/>
                            </View>
                            )
                        })}

                    </View>
                </ScrollView>                
            </SafeAreaView>
        </ImageBackground>
        
    )

}

export default Dashboard;