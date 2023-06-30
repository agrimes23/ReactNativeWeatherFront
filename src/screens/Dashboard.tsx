import {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import {useNavigation, useRoute, useIsFocused } from '@react-navigation/native'
import axios from 'axios'
import GetEachCityWeather from '../components/GetEachCityWeather'
import apiData from '../data/ApiService'

type Props = {};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Search">;

export type DashboardData = {
    id: number;
    cityname: string;
}

const Dashboard = (props: Props) => {

    const [getData, setGetData] = useState<Array<DashboardData>>([])
    const isFocused = useIsFocused()

    const navigation = useNavigation<NavigationProp>()

    const getDBWeather = () => {

         axios.get(`http://10.0.2.2:3000/api/v1/weather`)
            .then(((res: any) => setGetData(res.data)), (err) => console.log("Woops " + err))
            .catch(error => {
                console.log("Message: " + error);
            });
    }

    const onDelete = (id: number) => {
        apiData.handleDelete(id)
    }

    useEffect (() => {
        if (isFocused) {
            getDBWeather();
            console.log("hey")
        }

    }, [isFocused])

    return (
        <ImageBackground className="w-screen h-full z-0" source={require('../../assets/images/blueskybg.jpg')}>
            <SafeAreaView className="bg-gray">
                <ScrollView>
                    <View className="mt-10">

                        {getData.map((weather: DashboardData, index: number) => {

                            console.log(weather)
                        return(
                            <View className="bg-white/60 p-5 rounded flex-row w-72 my-4 mx-auto justify-around" key={index}>
                                <View className="flex-col">
                                    <Text className="text-2xl text-black pt-3" >{weather.cityname} </Text>
                                    <TouchableOpacity className="w-14 p-2 mt-4 bg-red-400/80 rounded" onPress={() => onDelete(weather.id)}>
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