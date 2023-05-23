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
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import {useNavigation, useRoute, useIsFocused } from '@react-navigation/native'
import axios from 'axios'

type Props = {};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Search">;

const Dashboard = (props: Props) => {

    const [getData, setGetData] = useState("")
    const isFocused = useIsFocused()

    const navigation = useNavigation<NavigationProp>()

    const getDBWeather = () => {

         axios.get(`http://10.0.2.2:3000/api/v1/weather`)
            .then(((res: any) => setGetData(res.data)), (err) => console.log("Woops " + err))
            .catch(error => {
                console.log("Message: " + error);
            });
    }

    useEffect (() => {
        if (isFocused) {
            getDBWeather();
            console.log(getData)
        }

    }, [isFocused])

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